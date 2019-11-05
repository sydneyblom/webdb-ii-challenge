const express = require('express');
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

//account router
const router = require('./routers/carRouter');

server.use('/api/car', router);


module.exports = server;