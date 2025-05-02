const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const server = app.listen(4001);

app.use(express.static(__dirname, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

const io = socketio(server, {
  //serveClient: true // default
  // allowRequest: (req, success) => {
  //   if (!req.user) {
  //     success(403, false);
  //   }
  // }
});

