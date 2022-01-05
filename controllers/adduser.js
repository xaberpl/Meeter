const User = require('../models/user')

exports.create=(req, res) => {
    var myData = new User(req.body);
    myData
      .save()
      .then((item) => {
        res.send("Name saved to database");
      })
      .catch((err) => {
        res.status(400).send("Unable to save to database");
      });
}
