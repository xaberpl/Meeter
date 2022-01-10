var express = require("express");
require("dotenv").config();

//import routes
const postRoutes = require('./routes/adduser')

// app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// db
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DBconnected"))
  .catch((err) => console.log(err));

// route middleware
app.use('/api', postRoutes)

//server port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
