const express = require('express');
const routes = express.Router();
const postController = require('./controllers/postController');

routes.post('/posts', postController.index);
routes.post('/posts', postController.create);
/*
routes.post('/posts', postController.update);
routes.post('/posts', postController.delete);
*/
module.exports = routes;