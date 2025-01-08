const express = require('express');
const Router = express.Router();
const captainController = require('../Controller/captain.controller');

Router.post('/register',captainController.RegisterCaptain);
Router.post('/login',captainController.LoginCaptain);

module.exports = Router;