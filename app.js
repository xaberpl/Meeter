const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
require("dotenv").config(); 
const appController = require("./controllers/adduser");
const isAuth = require("./middleware/is-auth");

//import routes
const postRoutes = require('./routes/adduser')

// app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


//chujwiecoto
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
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

const store = new MongoDBStore({
  uri: process.env.DATABASE,
  collection: "mySessions"
})
// route middleware
// app.get('./mainPage', appController.mainPageGet);
app.use('/api', postRoutes )
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    username: String,
    
    
  })
)
app.get('/mainPage', isAuth, appController.mainPageGet);
app.get("/xdd", (req,res) =>{
  console.log(req.session);
  req.session.isAuth = true;
  console.log(req.session.isAuth);
  res.send("dupakupa");
})





//server port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
