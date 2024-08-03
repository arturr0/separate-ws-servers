const express = require('express');
const path = require('path');
const router = express.Router();

// Route for Subpage 1
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/subpage1.html'));
});

module.exports = router;
