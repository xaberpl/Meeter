const express = require('express');

const router = express.Router();

// import controller methods
const { create } = require('../controllers/adduser');

router.post('/adduser', create);

module.exports = router;

