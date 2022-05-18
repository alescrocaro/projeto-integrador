const express = require('express');
const routes = express.Router();
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');

const uploadService = require('./services/upload')

routes.get('/posts', postController.index);
routes.get('/posts/:id', postController.get);
routes.post('/posts', uploadService ,postController.create);
routes.delete('/posts/:id', postController.delete);

routes.post('/updatePostImage/:id', uploadService ,postController.updatePostImage);
/*
routes.post('/posts', postController.update);
*/

// COMMENTS
routes.get('/posts/:id/comments', commentController.index);
routes.post('/posts/:PostId/comments', commentController.create);
routes.delete('/posts/:id/comments/:id', commentController.delete);

module.exports = routes;
