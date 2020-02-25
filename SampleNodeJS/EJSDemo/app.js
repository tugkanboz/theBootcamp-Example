const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let posts = [
    {title: "Post 1", author: "Tugkan"},
    {title: "Post 2", author: "Tugo"},
    {title: "Post 3", author: "Tug"}
];

let love = [
    "love", "lovee", "loveee", "loveeee"
];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    let thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function (req, res) {
    res.render("posts", {posts: posts, love: love});
});

app.post("/addLove", function (req, res) {
    let newLove = req.body.newLove;
    love.push(newLove);
    res.redirect("/posts");
});

//localhost way
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});