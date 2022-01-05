const express = require('express');
const router = express.Router(); // skapar vi en instans av Router
const path = require('path'); // inbyggd core module

router.get('/batcave', (req, res) => { // endpoint för en batcave
    res.sendFile(path.resolve('public/batcave.html')); // skickar vi batcave.html till
});

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('public/create.html'));
});

module.exports = router;