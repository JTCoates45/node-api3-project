const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());
// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

const { logger } = require('./middleware/middleware');
server.use(logger);
const usersRouter = require('./users/users-router');
server.use('/api/users', usersRouter);
module.exports = server;