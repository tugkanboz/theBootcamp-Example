var express = require('express');
var app = express();

app.get("/",function (req,res) {
    res.send("Hi There");
});

app.get("/bye",function (req,res) {
    res.send("Goodbye!!");
});

app.get("/r/:subredditName", function (req,res) {
    res.send(" welcome to the subreddit ");
});


app.get("/r/music");
app.get("/r/movies");

app.get("*",function (req,res) {
    res.send("Go the true way");
});

//localhost way
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});