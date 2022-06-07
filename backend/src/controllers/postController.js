const { Post,Image } = require('../models');
const { Comment } = require('../models');


const sequelize = require('sequelize');

module.exports = {
  async index(req, res){
    try {
      //se tiver filtros
      if(Object.keys(req.query).length){

      const distanceAttr = sequelize.fn('ST_DistanceSphere',
        sequelize.literal(`latlng`),
        sequelize.literal(`ST_MakePoint(${req.query.mapCenter[1]}, ${req.query.mapCenter[0]})`)
      )

        const posts = await Post.findAll({
          include:[
            {model:Image}
          ],
          // attributes:{
          //   include:[
          //     [distanceAttr, 'distance'],
          //   ]
          // },
          where: {
            $and: sequelize.where(distanceAttr, { [sequelize.Op.lte]: (req.query.mapSearchRadius * 1000) }),
          },
          order: [['updatedAt', 'DESC']],
        });


        console.log('posts ->', posts)
        return res.json(posts);

      }else{
        const posts = await Post.findAll({
          include:[
            {model:Image}
          ],
          order: [['updatedAt', 'DESC']],
        });

        console.log(posts);
        return res.json(posts);
      }

    } catch (error) {
      console.log(error)
      res.status(500).send();
    }
  },
  
  async get(req, res){
    try {
      const post = await Post.findOne({ where: { id: req.params.id }, include:[
        {model:Image}
      ] });
  
      return res.json(post);
    } catch (error) {
      console.log(error)
      res.status(500).send();
    }
  },

  async create(req, res){
    try {
      const { 
        title,
        biome,
        userName, 
        specie,
        genus,
        family,
        order,
        className,
        phylum,
        kingdom,
        country,
        city,
        weather,
        dateFound,
        description,
        latlng,
        tags
      } = req.body;

    
      const post = await Post.create({
        title,
        biome,
        userName, 
        specie,
        genus,  
        family,
        order,
        className,
        phylum,
        kingdom,
        country,
        city,
        weather,
        dateFound,
        description,
        tags,
        latlng: {type: 'Point', coordinates: [latlng.lng, latlng.lat]}, //geojson format [lng, lat]
      }); 
      return res.json(post.dataValues.id); 
    } catch (error) {
      console.log(error);
      res.status(500).send();      
    }
  },

  
  /*,

  async update(req, res){
    // const { title, description } = req.body;

  },
  */

  async delete(req, res){
    try {
      const { id } = req.params;
      // const user_id = req.headers.authorization;
      /*
      if(post.user_id !== user_id){
        return response.status(401).json({ error: 'Unauthorized user.'}); 
        // 401 - nao autorizado
      }
  
      */
      await Post.destroy({
        where: {
          id: id
        }
      });

      return res.status(204).send(); // 204 - res sucesso sem conteudo
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  },

  async updatePostImage (req, res) {
    const { id } = req.params;
    try {
      const posts = await Post.findAll({where:{id}})
      if (posts.length === 0) return res.status(404).send();
      if (req.files == null) {
        return res.status(404).send()
      }
      for(element in req.files) {
        await Image.create({url:req.files[element].filename, PostId:id })
      }
      return res.status(200).send()

    } catch (error) {
      console.log(error);
      res.status(500).send();
    }

  }

}
