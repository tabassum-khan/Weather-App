const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("./public"));

app.get("/", function(req, res){
    const readStream = fs.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
});

app.get("/index.html", function(req, res){
    const readStream = fs.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
})

const port = 3000;
app.listen(port, () => console.log("Server started on port " + port + "..."));