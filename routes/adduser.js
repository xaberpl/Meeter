const express = require('express');

const router = express.Router();

// import controller methods
const { create, list } = require('../controllers/adduser');

router.post('/adduser', create);
router.get('/users', list);

module.exports = router;

