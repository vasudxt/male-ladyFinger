var express=require('express');
var app=express();
var port =3000
app.get('/',(req,resp)=>
{
    resp.send('<h1>welcome to express </h1>');
    

});

app.listen(port,()=>
{
    console.log(`server is running on ${port}` );
})