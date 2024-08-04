const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // Use the PORT environment variable set by Render

app.use(cors({
    origins:"https://separate-ws-servers.onrender.com/subpage1", // Your frontend's URL
    methods: ["GET", "POST"],
    credentials: true
}));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "https://separate-ws-servers.onrender.com",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('User connected to Subpage 1 WebSocket server');

    socket.on('message', (msg) => {
        console.log(`Message from client on Subpage 1: ${msg}`);
    });

    socket.send('Welcome to the WebSocket server for Subpage 1');

    socket.on('disconnect', () => {
        console.log('User disconnected from Subpage 1 WebSocket server');
    });
});

server.listen(port, () => {
    console.log(`Subpage 1 WebSocket server is running on http://localhost:${port}`);
});
