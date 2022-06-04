const http = require('http'); // imported http package for creating a server
const port = 2000; //created a port
const app = require('./app');

const server = http.createServer(app); //created a server using http which has the built-in function of createServer

server.listen(port); //now I need to show server the port to listen the requests