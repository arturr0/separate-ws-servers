const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080; // Use the PORT environment variable or default to 8080

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// WebSocket server setup
wss.on('connection', ws => {
    console.log('New WebSocket connection on Main server');
    
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
    });

    ws.send('Welcome to the Main WebSocket server!');
});

// Start the WebSocket server
server.listen(port, () => {
    console.log(`Main WebSocket server is running on http://localhost:${port}`);
});
