var express = require("express");
require("dotenv").config();

// app
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DBconnected"))
  .catch((err) => console.log(err));
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  password2: String,
  datePicker: String,
});
var User = mongoose.model("User", nameSchema);
// route

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/adduser", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("Name saved to database");
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
