const express = require('express');
const Router = express.Router();
const userController = require('../Controller/user.controller');
const Authmiddleware = require('../Middlewares/auth.middleware');

Router.post('/registeration', userController.RegisterUser);
Router.post('/login',userController.LoginUser);
Router.post('/profile',Authmiddleware.Islogin,userController.GetUserProfile)

module.exports = Router;