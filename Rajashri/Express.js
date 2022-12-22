const express=require('express');
const app=express();
app.get("/",function(req,resp){
    resp.send("<h1>Hello from server</h1>");
});

app.get("/aboutus",function(req,resp){
    resp.send("<h1>this is SDM priject</h1>");
});

app.listen(5000);
console.log("Server is running at 5000");