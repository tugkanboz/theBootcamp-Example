const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/cat_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);


let george = new Cat({
    name: "Mavis",
    age: 11,
    temperament: "Grouchy"
    }
);

/*
george.save(function (err,cat) {
    if(err){
        console.log("something is wrong");
    }else{
        console.log("saved");
        console.log(cat);
    }
});
*/

Cat.create({
    name: "black",
    age: 12,
    temperament: "Grouchy"
},function (err,cat){
    if(err){
        console.log(err);
    }else{
        console.log("cat created");
        console.log(cat);
    }
});


Cat.find(function (err,cats) {
    if(err){
        console.log("error");
    }else{
        console.log("all cats..");
        console.log(cats);
    }
});