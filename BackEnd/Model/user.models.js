const mongoose = require('mongoose');
const Bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    Username : {
        first_name : {
            type : String,
            required : true,
            select : true,
            minlength : [3,"name must be 3 charater"]
        },
        last_name : {
            type : String,
            required : true,
            select : true,
            minlength : [3,"name must be 3 charater"]
        }
    },
    Email : {
        type : String,
        required : true,
        select : true,
        minlength : [5,"name must be 3 charater"]
    },
    Password : {
        type : String,
        required : true,
        select : false,
        minlength : [3,"name must be 3 charater"]
    },
    SocketId : {
        type : String,
        select : true,
    }
})

UserSchema.statics.hashPass = async (Password) => {
   return await Bcrypt.hash(Password,10);
}

UserSchema.methods.GenToken = () => {
    return Jwt.sign({_id : this._id},process.env.Token,{expiresIn:'24h'})
}

UserSchema.methods.ComparePass = async(Password,hashPassword) => {
    return await Bcrypt.compare(Password,hashPassword)
}

const UserModel = mongoose.model('user',UserSchema);
module.exports = UserModel;