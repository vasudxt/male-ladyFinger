// jshint eversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/loginData");

var e;
var p;

const dataSchema = {
    email_id : String ,
    password: String
};

const Data = mongoose.model("Data", dataSchema);

const data1 = new Data ( {
    email_id: "abc@gmail.com" ,
    password: "abcd" 
});

const data2 = new Data ( {
    email_id: "def@gmail.com" ,
    password: "qwer" 
});

const data3 = new Data ( {
    email_id: "ghi@gmail.com" ,
    password: "zxcv" 
});

dataStore = [data1, data2, data3];


app.get("/", function(req,res) {

    Data.find({}, function(err,foundData) {
        if(foundData.length == 0) {
        Data.insertMany(dataStore, function(err){});
        res.redirect("/");
        }
        else {
            res.sendFile(__dirname + "/index.html");
        }

    });
   

});

app.post("/",function(req,res) {
    const email = req.body.eMail;
    const pass  = req.body.passWord;
    Data.find({email_id:email},function(err,doc) {
        if(doc.length == 0) {
            console.log("Email No match"); 
        }
        else {
            e = 1;
        }
    });

    Data.find({password:pass},function(err,docc) {
        if(docc.length == 0) {
            console.log("Password No match"); 
        }
        else {
            p = 1;
        }
    });

    if(e==1 && p==1) {
        res.redirect("/home");
    }
    // Data.countDocuments({emai_id: email},{password: pass}, function (err, count){ 
    //     if(!err) {
    //     if(count>0){
    //         console.log("Data Matched. login successfull");
    //         res.redirect("/home");
    //     }
    // }
    // else {
    //     console.log("Login Unsuccessfull");
    // }
    // }); 
 
});

app.get("/home", function(req,res){
    res.sendFile(__dirname + "/home.html");
})

app.listen(3000,function() {
    console.log("Server started at port 3000");
})