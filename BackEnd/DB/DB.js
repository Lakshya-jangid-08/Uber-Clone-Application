const mongoose = require('mongoose');
const connect_to_DB = mongoose.connect(process.env.DB).then(()=>{
    console.log('server connected to the DataBase');
})

module.exports = connect_to_DB;