const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./Routes/user.routes');
const captainRouter = require('./Routes/captain.routes');
const dotenv = require('dotenv');
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/user',userRouter);
app.use('/captain',captainRouter);

module.exports = app;