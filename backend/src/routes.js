const express = require('express');
const routes = express.Router();
const postController = require('./controllers/postController');

// POSTS
routes.get('/posts', postController.index);
routes.get('/posts/:id', postController.get);
routes.post('/posts', postController.create);
routes.delete('/posts/:id', postController.delete);
/*
routes.post('/posts', postController.update);
*/

// COMMENTS
// routes.get('/posts/:id/comments', postController.index);

module.exports = routes;
