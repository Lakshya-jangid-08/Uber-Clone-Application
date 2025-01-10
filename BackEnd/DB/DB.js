const mongoose = require('mongoose');

const connect_to_DB = async () => {
    try { 
        await mongoose.connect(process.env.DB);
        console.log('Server connected to the DataBase');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};


module.exports = connect_to_DB;