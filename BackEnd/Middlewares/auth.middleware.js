const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../Model/user.models');

module.exports.Islogin = async function (req,res,next) {
    const token = req.cookie.token || req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).json({message : "UnAuthorized"})
    } 

    try {
        const decoded = jsonwebtoken.verify(token,process.env.Token);
        const user = await UserModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (err) {
        res.status(401).json({message : "UnAuthorized"})
    }
}

