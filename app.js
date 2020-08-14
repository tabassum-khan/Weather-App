const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("./public"));

app.get("/", function(req, res){
    const readStream = fs.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
});


var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Server is working on port " + port);
});