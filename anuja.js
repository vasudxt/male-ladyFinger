const http=require('http');
const fs=require('fs');
var person={
    'id':23,
    'firstname':"Anuja",
    'lastname':"Gupta"
};
var server=http.createServer((req,resp)=>{
    resp.write('<h1> welcome to student assessment </h1>');
    resp.end();
})
server.listen(3000);
console.log("serever is running on port 3000");