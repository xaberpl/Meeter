const User = require("../models/user");
const Event = require("../models/event");

exports.create = (req, res) => {
  //console.log(req.body);
  var myData = new User(req.body);

  myData
    .save()
    .then((item) => {
      res.send("User saved to database");
      //console.log(item);
    })
    .catch((err) => {
      res.status(400).send("Unable to save user to database");
    });
};

exports.list = (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) console.log(err);

    res.json(users);
  });
};

exports.addevent = (req, res) => {
  var myData = new Event(req.body);

  myData
    .save()
    .then((item) => {
      res.send("Event saved to database");
      //console.log(item);
    })
    .catch((err) => {
      res.status(400).send("Unable to save event to database");
    });
};

exports.eventslist = (req, res) => {
  Event.find({}).exec((err, events) => {
    if (err) console.log(err);

    res.json(events);
  });
};