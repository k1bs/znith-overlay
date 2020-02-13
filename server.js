// TODO: remove this
/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
const client = io.of('/client');

app.use((req, res, next) => {
  req.io = client;
  next();
});

client.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.post('/gsi', (req, res) => {
  req.io.emit('fromServer', 'new message!');
  res.status(200).send(req.body);
});

app.all('*', (req, res) => {
  console.error('whoops, 400');
  res.status(400).json({
    message: 'Bad request',
  });
});

app.all((err, req, res) => {
  console.error('whoops, 500');
  console.error(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});

server.listen(3771, () => {
  console.log('Listening on 3771');
});
