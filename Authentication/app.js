const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrategy         = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect('mongodb://localhost/auth_app',{
      useNewUrlParser: true,
      useUnifiedTopology: true
});

app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('express-session')({
  secret: "secret is the new secret.",
  saveUninitialized: false,
  resave: false
})); 


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//====ROUTES====

app.get("/",function (req,res) {
    res.render("home");
});

app.get("/secret",isLoggedIn,function (req,res) {
    res.render("secret");
});

//====AUTH ROUTES====

app.get("/register",function (req,res) {
    res.render("register");
});

app.post("/register",function (req,res) {
    req.body.username;
    req.body.password;
    User.register(new User({username: req.body.username}),req.body.password, function (err,user) {
      if(err){
        console.log(err);
        res.render("register");
      }
      passport.authenticate("local")(req,res,function () {
        res.redirect("/secret");
      });
    });
});

app.get("/login",function (req,res) {
    res.render("login");
});

app.post("/login", passport.authenticate("local" ,{
    successRedirect:  "/secret",
    failedRedirect:   "/login"
}),function (req,res) {
});

app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

app.listen(3000, function () {
    console.log("data auth started.")
});
