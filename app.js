const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended: true}));


// app.set('view engine', 'ejs');





app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get('/work', function(req, res){
    // res.sendFile(__dirname + "/work.html");
    res.render('pages/work');
});
app.get('/project', function(req, res){
    // res.sendFile("project");
    res.render('pages/project');
});
app.get('/about', function(req, res){
    res.render('pages/about');
});
app.get('/contact-form', function(req, res){
    res.render('pages/contact-form');
});
app.get('/thankyou', function(req, res){
    res.render('pages/thankyou');
});



app.listen(3000, function(){
    console.log("Server is running on port 3000....");
});

