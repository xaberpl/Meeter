const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
//const isAuth = require("../middleware/is-auth");

// import controller methods
const { create, list, addevent, eventslist, login } = require('../controllers/adduser');


router.post('/adduser', create);
router.get('/users', list);
router.post('/addevent', addevent);
router.get('/events', eventslist);
router.post('/login', login);


module.exports = router;