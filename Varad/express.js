const express= require('express');

const app= express();

app.get("/",function(req,res){
    res.send("<h1>Hello From Server</h1>");
});

app.get("/aboutus",function(req,res){
    res.send("<h2>This is SDM project</h2>")
});

app.listen(3000);
console.log("server is running at 3000");