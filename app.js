const express = require("express");

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');







app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000....");
});

