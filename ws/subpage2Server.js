const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002; // Port for the WebSocket server

// Replace "http://your-client-domain.com" with your actual client's domain
app.use(cors({
    origin: "http://your-client-domain.com", // Specific client origin
    methods: ["GET", "POST"],
    credentials: true
}));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "https://separate-ws-servers.onrender.com", // Ensure this matches the CORS origin
        methods: ["GET", "POST"],
        credentials: true
    },
    transports: ["websocket"] // Specify only WebSocket transport
});

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('User connected to Subpage 2 WebSocket server');

    socket.on('message', (msg) => {
        console.log(`Message from client on Subpage 2: ${msg}`);
    });

    // Send a welcome message to the client
    socket.send('Welcome to the WebSocket server for Subpage 2');

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected from Subpage 2 WebSocket server');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Subpage 2 WebSocket server is running on port ${port}`);
});

// Error handling for server issues
server.on('error', (error) => {
    console.error('Server error:', error);
});
