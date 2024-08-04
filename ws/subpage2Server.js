const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 10002;

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('User connected to Subpage 2 WebSocket server');

    socket.on('message', (msg) => {
        console.log(`Message from client on Subpage 2: ${msg}`);
    });

    socket.send('Welcome to Subpage 2 WebSocket server');

    socket.on('disconnect', () => {
        console.log('User disconnected from Subpage 2 WebSocket server');
    });
});

server.listen(port, () => {
    console.log(`Subpage 2 WebSocket server running on port ${port}`);
});
