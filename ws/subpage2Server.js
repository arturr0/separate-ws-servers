const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8082; // Use the PORT environment variable or default to 8082

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "https://separate-ws-servers.onrender.com", // Allow requests from the main server
        methods: ["GET", "POST"]
    }
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
    console.log(`Subpage 2 WebSocket server is running on http://localhost:${port}`);
});
