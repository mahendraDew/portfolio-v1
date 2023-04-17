const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended: true}));


// app.set('view engine', 'ejs');





app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/work", function(req, res){
    // res.sendFile(__dirname + "/work.html");
    res.render("work");
});
app.get("/project", function(req, res){
    // res.sendFile("project");
    res.render("project");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/contact", function(req, res){
    res.render("contact");
});



app.listen(3000, function(){
    console.log("Server is running on port 3000....");
});

