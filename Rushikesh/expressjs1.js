var express=require('express')

var app=express();

app.get("/",function(req,resp)
{
    resp.send("<h1>Hello rushi abhiram</h1>")
});

app.get("/aboutus",function(req,resp)
{
    resp.send("<h1>Hello vaishnavi</h1>")
});

app.listen(3000);
console.log("server is running on port no. 3000")
