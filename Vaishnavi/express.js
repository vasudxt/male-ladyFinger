const express=require('express')

const app=express();

app.get("/",function(req,resp)
{
    resp.send("<h1>Hi Vaishnavi</h1>")
});

app.get("/aboutus",function(req,resp)
{
    resp.send("<h1>Hi Rushikesh</h1>")
});

app.listen(3000);
console.log("Server is running.........")

