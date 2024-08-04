const express = require('express');
const path = require('path');

const app = express();
const port = 10000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/subpage1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/subpage1.html'));
});

app.get('/subpage2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/subpage2.html'));
});

app.listen(port, () => {
    console.log(`HTTP server is running on http://localhost:${port}`);
});
