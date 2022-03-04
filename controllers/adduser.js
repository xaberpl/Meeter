const UserSchema = require("../models/user");
const Event = require("../models/event");
const bcrypt = require('bcryptjs');


exports.indexGet = (req, res) => {
  res.render("index", { wrongEmail:req.session.wrongEmail, wrongPassword:req.session.wrongPassword });
}
exports.mainPageGet = (req, res) => {
  res.render("mainPage", { });
}
exports.createEventGet = (req, res) => { 
  res.render("createEvent", { firstName: req.session.firstName, lastName: req.session.lastName });
}

exports.listGet = (req, res) => {
  res.render("list", {});
};
exports.userProfileGet = (req, res) => {
  res.render("userProfile", {
    firstName: req.session.firstName,
    lastName: req.session.lastName,
    email: req.session.email,
    datePicker: req.session.datePicker,
  });
};

exports.create = async (req, res) => {
  const { firstName, lastName, email, password, datePicker } = req.body;

  let user = await UserSchema.findOne({ email });

  if (user) {
    return res.redirect("/index");
  }

  const hashedPsw = await bcrypt.hash(password, 12);

  user = new UserSchema({
    firstName,
    lastName,
    email,
    password: hashedPsw,
    datePicker,
  });

  user
    .save()
    .then((item) => {
      res.redirect("/index");
    })
    .catch((err) => {
      res.status(400).send("Unable to save user to database");
    });
};

exports.addevent = (req, res) => {
  var myData = new Event(req.body);

  myData
    .save()
    .then((item) => {
      //res.send("Event saved to database");
      res.redirect("/list");
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

exports.eventPageGet = (req, res) => {
  const {_id} = req.params;
  Event.find({_id}).exec((err, event) => {
    if (err) console.log(err);
   
     const {
           eventTitle,
           eventDescription,
           eventCategory,
           eventVenue,
           eventDate,
           author
        }=event[0];              
              
              res.render("eventPage", { eventTitle:eventTitle, eventDescription:eventDescription, eventCategory:eventCategory, eventVenue:eventVenue, eventDate:eventDate, author:author});
             
   });
};

exports.login = async (req, res) => {
  const { lgemail, lgpassword } = req.body;
  const email = lgemail;
  const user = await UserSchema.findOne({ email });
  if (!user) {    
    req.session.wrongPassword=false;
    req.session.wrongEmail=true;
    return res.redirect("/index");
    }
  const isMatch = await bcrypt.compare(lgpassword, user.password);

  if (!isMatch) {
    req.session.wrongPassword=true;
    req.session.wrongEmail=false;
    return res.redirect("/index");
  }

  req.session.firstName = user.firstName;
  req.session.lastName = user.lastName;
  req.session.email = user.email;
  req.session.datePicker = user.datePicker;
  req.session.isAuth = true;
  res.redirect("/mainPage");
};

exports.logoutGet = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/index");
  });
};
exports.userDelete = async (req, res) => {  
  const email= req.session.email
  const deleteResult = await UserSchema.deleteMany({ email: email });
  console.log('Deleted documents =>', deleteResult);
  res.redirect("/index");
};

exports.userUpdate = async (req, res) => {  
  const email= req.session.email
  const { firstName, lastName, datePicker, updatedEmail } = req.body;
  const updateResult = await UserSchema.updateOne({ email: email }, {$set: {firstName:firstName, lastName:lastName, datePicker:datePicker, email:updatedEmail}});
  console.log('Updated documents =>', updateResult);
  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.email = updatedEmail;
  req.session.datePicker = datePicker;
  res.redirect("/userProfile"); 
};

