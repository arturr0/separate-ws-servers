const express = require('express');
const path = require('path');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
