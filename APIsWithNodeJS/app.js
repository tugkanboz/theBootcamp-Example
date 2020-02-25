let express = require('express');
let app = express();
let request = require('request');
app.set("view engine", "ejs");


/*
request('http://www.omdbapi.com/?&apikey=thewdb&s=star', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let parsedData = JSON.parse(body);
    console.log('body:', parsedData); // Print the HTML for the Google homepage.
});*/


app.get("/",function (req, res) {
    res.render("search");
});


app.get("/results", function (req, res) {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?&apikey=thewdb&s=" + query;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {data : data});
        }
    });
});


app.listen(3000, function () {
    console.log("server is listening");
});
