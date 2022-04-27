const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(req, res){
    const { title, description } = req.body;
    const id = crypto.randomBytes(4).toString('HEX'); // cria um id aleatório de 
                                                      // 4 bytes em hexadecimal
    console.log(id, title, description);
  
    await connection('posts').insert({
      id,
      title,
      description,
    }); // utiliza-se o async-await pois o insert pode demorar um pouco, e 
        // queremos que o retorno aconteca apenas depois do insert
  
    return res.json({ id }); // devolve o id (imagino que vai precisar do id pra 
                             // mostrar a página do post criado)
  },

  async read(req, res){
    const posts = await connection('posts').select('*');

    return res.json(posts);
  }
  
  /*,

  async update(req, res){
    // const { title, description } = req.body;

  },

  async delete(req, res){
    const { id } = req.params;
    const user_id = req.headers.authorization;

    const post = await connection('posts')
      .where('id', id)
      .select('user_id')
      .first() // retorna apenas 1 resultado

    if(post.user_id !== user_id){
      return response.status(401).json({ error: 'Unauthorized user.'}); 
      // 401 - nao autorizado
    }

    await connection('posts').where('id', id).delete();

    return res.status(204).send(); // 204 - res sucesso sem conteudo
  }
  */
}
