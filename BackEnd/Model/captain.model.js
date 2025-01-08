const mongoose = require('mongoose');
const Bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const CaptainSchema =new mongoose.Schema({
    Captainname : {
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
    },
    Location : {
        lat : {
            type : String,
        },
        long : {
            type : String,
        } 
    },
    Status : {
        type : String,
        select : true,
        enum : ['active','inactive'],
        default : 'inactive'
    },
    Vehicle : {
        Color : {
            type:String,
            select : true,
            required : true,
            minlength : [3,"color name must be 3 charater"]
        },
        Plate : {
            type : String,
            select : true,
            required : true,
            minlength : [3,"plate name must be 3 charater"]
        },
        Capacity : {
            type : Number,
            select : true,
            required : true,
            minlength : [1,"minimum capacity to carry passenger will be 1"]
        },
        VehicleType : {
            type : String,
            select : true,
            required : true,
            enum : ['Bike','Car','Auto'],
        }
    }
})


CaptainSchema.statics.hashPass = async (Password) => {
    return await Bcrypt.hash(Password,10);
 }
 
 CaptainSchema.methods.GenToken = () => {
     return jsonwebtoken.sign({_id : this._id},process.env.Token,{expiresIn:'24h'})
 }
 
 CaptainSchema.methods.ComparePass = async(Password,hashPassword) => {
     return await Bcrypt.compare(Password,hashPassword)
 }

module.exports = mongoose.model('captain',CaptainSchema);