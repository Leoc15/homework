import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();

const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.end('Hello world!');
});

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', socket => {
  let name;
  const users = {};
  console.log('got a connection', socket.id);

  socket.on('login', n => {
    users[socket.id] = name;
    name = n;

    io.emit('msg', `${name} has joined the chat`)
  });

  socket.on('msg', msg => {
    //socket.broadcast.emit('msg', msg);

    io.emit('msg', `${name} says: ${msg}`);
  });

  // socket.on('private message', (data) => {
  //   const { recipientIds, message } = data;
  //   recipientIds.forEach(recipientId => {
  //     if (users.includes(recipientId) && recipientId !== socket.id) {
  //       io.to(recipientId).emit('private message', {
  //         senderId: socket.id,
  //         message: message
  //       });
  //     }
  //   });
  // });

  socket.on('disconnect', function () {
    console.log('Disconnected from server', socket.id);
    delete users[socket.id];
    io.emit('msg', `${name} has left the chat`)
  });

});






server.listen(80);
