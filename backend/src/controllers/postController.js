const { Post,Image } = require('../models');
const { Comment } = require('../models');

module.exports = {
  async index(req, res){
    try {
      const posts = await Post.findAll({
        include:[
          {model:Image}
        ]
      });
  
      return res.json(posts);
    } catch (error) {
      res.status(500).send();
    }
  },
  
  async get(req, res){
    try {
      const post = await Post.findOne({ where: { id: req.params.id } });
  
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
        latlng: {type: 'Point', coordinates: [latlng.lng, latlng.lat]} //geojson format [lng, lat]
      }); 

      console.log("PRINT ID ---------------------------- "+post.dataValues.id);
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
        await Image.create({url:element.filename, PostId:id })
      }
      return res.status(200).send()

    } catch (error) {
      console.log(error);
      res.status(500).send();
    }

  }

}
