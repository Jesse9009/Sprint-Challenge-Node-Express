const express = require('express');
const logger = require('morgan');

const server = express();

const port = 4050;

const actionRoutes = require('./actionRoutes');
const projectRoutes = require('./projectRoutes');

// Middleware
server.use(express.json());
server.use(logger('dev'));

// Routes
server.use('/api/actions', actionRoutes);
server.use('/api/projects', projectRoutes);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
