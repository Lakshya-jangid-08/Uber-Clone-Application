const mongoose = require('mongoose');

const Blacklist = new mongoose.Schema({
    token : {
        type: String,
        required : true,
        unique : true
    },
    Date:{
        type : Date,
        default : Date.now,
        expires : 86400
    }
})

module.exports = mongoose.model('blacklist',Blacklist)
