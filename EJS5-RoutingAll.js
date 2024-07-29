var express = require("express");
var app = express();
var port = 8000;
app.get("/",(req,res)=>{
    res.send("display from  page: sandy");
})
app.get("/home",(req,res)=>{
    res.send("display from home page: sandy");
})
app.get("/about",(req,res)=>{
    res.send("display from about page: sandy");
})
app.get("/contact",(req,res)=>{
    res.send("display from contact page: sandy");
})
app.listen(port,()=>{
    console.log("running on port 8000")
});