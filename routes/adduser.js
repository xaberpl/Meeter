const express = require('express');
const router = express.Router();

// import controller methods
const { create, list, addevent } = require('../controllers/adduser');

router.post('/adduser', create);
router.get('/users', list);
router.post('/addevent', addevent);

module.exports = router;