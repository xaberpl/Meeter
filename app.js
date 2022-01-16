const express = require("express");
const session = require("express-session");
mongoDBSession = require('connect-mongodb-session')(session);
require("dotenv").config();


//import routes
const postRoutes = require('./routes/adduser')

// app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
// const isAuth = (req,res, next) =>{
//   if(req.session.isAuth) {
//     console.log(req.session.isAuth);
//     next()
//   } else{
//     res.redirect("/index.html")
//   }
// }
// app.get("/mainPage", isAuth, (req, res) =>{
//   res.status(200);
// });
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

const store = mongoDBSession({
  uri: process.env.DATABASE,
  collection: "mySessions"
})
// route middleware
app.use('/api', postRoutes )
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
)

//server port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
