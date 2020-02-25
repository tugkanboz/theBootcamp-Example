var express = require('express');
var app = express();

app.get("/",function (req,res) {
    res.send("Hi assignment");
});

app.get("/speak/:animal",function (req,res) {
    var animal = req.params.animal;
    var sound = "";
    if(animal === "pig"){
        sound = "oink";
    }else if(animal === "dog"){
        sound = "hav";
    }
    res.send("the" + animal + "says" + sound);
});

app.get("/repeat/:message/:cnt",function (req,res) {
        var cnt = req.params.cnt;
        var message = req.params.message;
        var result = "";
        for (var i = 0 ; i<=cnt;i++){
            result += message + " ";
        }
        res.send(result);

});

app.get("*",function (req,res) {
    res.send("Go Back");

});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});