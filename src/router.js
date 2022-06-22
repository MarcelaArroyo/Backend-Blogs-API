const express = require('express');

const routers = express.Router();

const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const categoriesRouter = require('./controllers/categories.controller');

routers.use('/login', loginController);
routers.use('/user', userController);
routers.use('/categories', categoriesRouter);

module.exports = routers;