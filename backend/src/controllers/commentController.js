const { Comment, Post } = require('../models');

module.exports = {
  async index(req, res){
    try {
      const { id } = req.params;
      console.log('ID PARAM INDEX:::::::::',id)
      const post = await Post.findByPk(id);

      var comments = null;
      try {
          comments = await Comment.findAll({
          where: {
            PostId: post.dataValues.id,
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send();
      }
  
      return res.json(comments);
    } catch (error) {
      console.log(error)
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
      } = req.body;

      const { PostId } = req.params;
    
      const comment = await Comment.create({
        userName,
        type,
        description,
        PostId,
      }); 
      console.log('ID PARAM CREATE:::::::::',PostId)

      console.log("PRINT COMMENT ID ---------------------------- ", comment.dataValues.PostId);
      return res.json(comment.dataValues.id); 
    } catch (error) {
      console.log('MENSAGEM:', error.message);
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
      
      await Comment.destroy({
        where: {
          id: id
        }
      });

      return res.status(204).send(); // 204 - res sucesso sem conteudo
    } catch (error) {
      console.log('MENSAGEM: ',error.message);
      res.status(500).send();
    }
  }
}