const { Comment } = require('../models');

module.exports = {
  async index(req, res){
    try {
      const comments = await Comment.findAll();
      console.log(comments);
  
      return res.json(comments);
    } catch (error) {
      res.status(500).send();
    }
  },
  
  // async get(req, res){
  //   try {
  //     const post = await Comment.findOne({ where: { id: req.params.id } });
  
  //     return res.json(post);
  //   } catch (error) {
  //     console.log(error)
  //     res.status(500).send();
  //   }
  // },

  async create(req, res){
    try {
      const { 
        userName,
        type,
        description,
        postId,
      } = req.body;
    
      const post = await Comment.create({
        userName,
        type,
        description,
        postId,
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
      const post = await connection('posts')
        .where('id', id)
        .select('user_id')
        .first() // retorna apenas 1 resultado
  
      if(post.user_id !== user_id){
        return response.status(401).json({ error: 'Unauthorized user.'}); 
        // 401 - nao autorizado
      }
  
      await connection('posts').where('id', id).delete();
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
  }
}
