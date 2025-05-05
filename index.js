const socket = io();

socket.on("connect", () => {
    //socket.send('salut');
    //socket.binary(true).emit('message', 'salut');
    socket.emit('message', 'salut');
});