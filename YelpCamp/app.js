const express       = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    Campground      = require('./models/campground'),
    seedDB          = require('./seeds');


mongoose.connect('mongodb://localhost/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();


app.get("/", function (req, res) {
    res.render("landing");
});

//INDEX - Show all campgrounds
app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err)
        } else {
            res.render("index",{campgrounds:allCampgrounds});
        }
    })
});

//CREATE - Add a new campground to DB
app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = {name: name, image: image, description: desc };
    Campground.create(newCampground,function (err, newlyCreated) {
        if(err)
        {
            console.log(err);
        }else{
            res.redirect("campgrounds");
        }
    });
});

//NEW - Show form to create a new campground
app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});


//SHOW - Shows more info about one campground
app.get("/campgrounds/:id",function (req,res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if(err)
        {
            console.log(err);
        }else{
            console.log(foundCampground);
            res.render("show",{campground:foundCampground});

        }
    });
});


app.listen(3000, function () {
    console.log("The YelpCamp Server Has Started. ")
});