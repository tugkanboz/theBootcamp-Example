var express = require('express');
var app = express();

app.get("/",function (req,res) {
    res.send("Reddit App.js");
});

app.get("/r/:subredditName",function (req,res) {
    console.log(req.params); // req.params equal to subredditName
    res.send("Hi There");
});

app.get("/r/:subredditName/comments/:id/:title",function (req,res) {
    console.log(req.params); // req.params equal to subredditName
    res.send("Hi There");
});

app.get("*",function (req,res) {
    res.send("Go Back");

});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});