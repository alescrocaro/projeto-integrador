const express = require('express');
const routes = express.Router();

routes.post('/posts', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
      post_id: '1',
      post_title: 'Macaco fora do lugar',
      post_description: 'Macaco estava no chão invés de estar numa árvore'
  });
});

module.exports = routes;