const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
require("dotenv").config();
const appController = require("./controllers/adduser");
const isAuth = require("./middleware/is-auth");

//import routes
const postRoutes = require("./routes/adduser");

// app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//db
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

const store = new MongoDBStore({
  uri: process.env.DATABASE,
  collection: "mySessions",
});
// route middleware
//KONIECZNIE NA POCZĄTKU PRZED INNYMI GETAMI I USAMI
//***************************************************
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);
// **************************************************
app.get('/',(req,res)=>
{
//console.log(req.listGetsession.isAuth)
if(req.session.isAuth)
res.redirect('/mainPage')
else
res.redirect('/index')}
)
app.use(express.static(__dirname));
app.use('/api', postRoutes)
app.get('/index',appController.indexGet);
app.get('/mainPage', isAuth, appController.mainPageGet);
app.get('/createEvent', isAuth, appController.createEventGet);
app.get('/userProfile', isAuth, appController.userProfileGet);
app.get('/list', isAuth, appController.listGet);
app.get('/eventPage/:_id', appController.eventPageGet);

//server port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
