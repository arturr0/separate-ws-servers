const express = require('express');
const path = require('path');
const router = express.Router();

// Route for Subpage 2
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/subpage2.html'));
});

module.exports = router;
