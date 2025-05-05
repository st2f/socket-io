const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

//const io = new Server(server, { /* options */ });
  //serveClient: true // default
  // path: '/test',
  // allowRequest: (req, success) => {
  //   if (!req.user) {
  //     success(403, false);
  //   }
  // }
//});

io.on("connection", (socket) => {
  console.log("new connection");

  socket.on("message", (msg) => {
    console.log(msg);
  })
})

server.listen(4001);