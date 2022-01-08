const User = require("../models/user");

exports.create = (req, res) => {
  console.log(req.body);
  var myData = new User(req.body);

  myData
    .save()
    .then((item) => {
      res.send("Name saved to database");
      console.log(item);
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
};

exports.list = (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) console.log(err);

    res.json(users);
  });
};
