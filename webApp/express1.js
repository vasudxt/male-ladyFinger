const express=require("express");
const app=express();
app.get("/", function(req,resp){
    resp.send("<h1>this is my first express</h1>")
});

app.get("/aboutus", function(req,resp){
    resp.get("<h2>About Us</h2>")
});
app.listen(3000);
console.log("server is running at port 3000");