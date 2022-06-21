const express = require('express');

const routers = express.Router();

const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');

routers.use('/login', loginController);
routers.use('/user', userController);

module.exports = routers;