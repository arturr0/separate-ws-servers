const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const cors = require('cors');

// Import WebSocket handlers
const subpage1Ws = require('./ws/subpage1Server');
const subpage2Ws = require('./ws/subpage2Server');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Attach WebSocket handlers to namespaces
io.of('/subpage1').on('connection', subpage1Ws);
io.of('/subpage2').on('connection', subpage2Ws);

// Define routes for different pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/subpage1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/subpage1.html'));
});

app.get('/subpage2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/subpage2.html'));
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
