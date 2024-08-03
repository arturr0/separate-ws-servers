const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

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

// Start the HTTP server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
