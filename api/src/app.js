// Enviroment Variables

import express from 'express';
import http from 'http';
import cors from 'cors';

// Configurando DB
require('./Database/index');

const app = express();
const server = http.Server(app);

// Socket
const io = require('socket.io')(server);


app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());

// Main Routes
app.use(require('./routes'));


// Error 404
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: 'Not found',
  });
});

// Error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    error: 'Something broke!',
  });
});

export default server;
