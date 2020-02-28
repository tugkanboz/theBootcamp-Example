const mongoose = require('mongoose');
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

//module exports was name of the Campground, we call in app.js
module.exports = mongoose.model("Campground", campgroundSchema);

