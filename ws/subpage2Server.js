const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002; // Port for Subpage 2 WebSocket server

app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"],
        credentials: true
    },
    transports: ["websocket", "polling"]
});

io.on('connection', (socket) => {
    console.log('User connected to Subpage 2 WebSocket server');
    socket.on('message', (msg) => {
        console.log(`Message from client on Subpage 2: ${msg}`);
    });
    socket.send('Welcome to the WebSocket server for Subpage 2');
    socket.on('disconnect', () => {
        console.log('User disconnected from Subpage 2 WebSocket server');
    });
});

server.listen(port, () => {
    console.log(`Subpage 2 WebSocket server is running on port ${port}`);
});
