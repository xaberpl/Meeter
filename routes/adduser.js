const express = require('express');
const router = express.Router();

// import controller methods
const { create, list, addevent, eventslist } = require('../controllers/adduser');

router.post('/adduser', create);
router.get('/users', list);
router.post('/addevent', addevent);
router.get('/events', eventslist);

module.exports = router;