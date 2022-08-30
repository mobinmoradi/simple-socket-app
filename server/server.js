const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});


io.on('connection', (socket) => {
  console.log(socket.id);
  setInterval(() => {
    io.emit('num', Math.random() * 100)
  }, 5000);
      
});


server.listen(8000, () => {
  console.log('listening on *:8000');
});