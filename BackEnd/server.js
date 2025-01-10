
// Author : Lakshya Jangid
// IIIT Vadodara
// Student ID : 202351075

const http = require('http');
const app = require('./app');
const connect_to_DB = require('./DB/DB')
const cors = require('cors');
app.use(cors());

connect_to_DB();

const server = http.createServer(app);

server.listen(process.env.Port,()=>{
    console.log(`Server is listing on ${process.env.Port}`);
})