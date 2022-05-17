const express = require('express');
const routes = express.Router();
const postController = require('./controllers/postController');

const uploadService = require('./services/upload')

routes.get('/posts', postController.index);
routes.get('/posts/:id', postController.get);
routes.post('/posts', uploadService ,postController.create);
routes.delete('/posts/:id', postController.delete);

routes.post('/updatePostImage/:id', uploadService ,postController.updatePostImage);
/*
routes.post('/posts', postController.update);
*/
module.exports = routes;