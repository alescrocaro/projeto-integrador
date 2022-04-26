const connection = require('../database/connection');

module.exports = {
  async create(req, res){
    try{
      const { post_id, title, description } = req.body;
      // const user_id = req.headers.authorization;

      const id = await connection('post').insert({
        post_id,
        title,
        description
      });

      return res.json(id);
    } catch(error){
      console.log(error);
      return res.json(error);
    }
  }
}