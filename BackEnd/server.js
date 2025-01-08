const http = require('http');
const app = require('./app');
const connect_to_DB = require('./DB/DB')

const server = http.createServer(app);

server.listen(process.env.Port,()=>{
    console.log(`Server is listing on ${process.env.Port}`);
})