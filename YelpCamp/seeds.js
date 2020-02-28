const   mongoose    = require('mongoose'),
        Campground  = require('./models/campground');
        Comment     = require('./models/comment');

const data = [
    {
        name:"cloud rest",
        image:"https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1154&q=80",
        description:"bla bla bla"
    },
    {
        name:"deser dasre",
        image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        description:"bla bla bla"
    },
    {
        name:"licker lecho",
        image:"https://images.unsplash.com/photo-1534187886935-1e1236e856c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80",
        description:"bla bla bla"
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({},function (err) {
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
        //Add a new campgrounds
        data.forEach(function (seed) {
            Campground.create(seed,function (err,campground) {
                if(err){
                    console.log(err);
                }else
                {
                    console.log("added a campground");
                    //Add a few comments
                    Comment.create({
                        text: "This place is great, but i wish there was internet",
                        author: "tugo"
                    },function (err,comment) {
                        if (err)
                        {
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
                }
            });
        });
});
}

module.exports = seedDB;