const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("./public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.get("/favicon.ico", function(req, res){
    res.send("<h1> Error: Directed to /favicon.ico route! </h1>");
});


var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Server is working on port " + port);
});