const express = require('express');

const routers = express.Router();

const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const categoriesController = require('./controllers/categories.controller');
const postController = require('./controllers/post.controller');

routers.use('/login', loginController);
routers.use('/user', userController);
routers.use('/categories', categoriesController);
routers.use('/post', postController);

module.exports = routers;