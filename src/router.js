const express = require('express');

const routers = express.Router();

const loginController = require('./controllers/login.controller');

routers.use('/login', loginController);

module.exports = routers;