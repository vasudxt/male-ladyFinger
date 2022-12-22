const express = require("express");
const app = express();
app.get("/", function (req, resp) {
    resp.send("<h1>Hello Pratik</h1>")
});

app.get("/aboutus", function (req, resp) {
    resp.send("<h1>Name - Pratik </h1>")
});

app.listen(3000);
console.log("server is running on port no. 3000")
