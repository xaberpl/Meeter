const UserSchema = require("../models/user");
const Event = require("../models/event");
const bcrypt = require('bcryptjs');

//const isAuth = require("../middleware/is-auth");

// exports.mainPageGet = (req, res) =>{
//   const username = req.session.username;
//   console.log(req.session);
//       console.log(req.session.isAuth);
//   //res.render("dashboard", { name: username });
// }
exports.mainPageGet = (req, res) =>{
  //const username = req.session.username;
//   req.session.username = user.email;
// console.log(req.session.username);
// req.session.isAuth = true;
// console.log(req.session.isAuth);
  res.render("mainPage");
}


exports.create = async (req, res) => {
  //console.log(req.body);
  const { firstName, lastName, email, password, datepicker } = req.body;
  let user = await UserSchema.findOne({ email })

  if (user) {
    return res.redirect('../index.html')
  }

  const hashedPsw = await bcrypt.hash(password, 12);

  user = new UserSchema({
    firstName,
    lastName,
    email,
    password: hashedPsw,
    datepicker
  });

  user
    .save()
    .then((item) => {
      res.redirect('../index.html');
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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserSchema.findOne({ email })

  if (!user) {
    return res.redirect('../index.html')
  }
  //console.log(password);
  //console.log(user.password)
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.redirect('../index.html')
  }
  // 
  // console.log(req.session);
if(req.session.username)
{console.log('jest');}
else{
  console.log('nie ma');
}
req.session.username = user.email;
//console.log(req.session.username);
req.session.isAuth = true;
//console.log(req.session.isAuth);
  res.redirect('../mainPage')
}