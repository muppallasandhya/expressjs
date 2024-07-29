var express = require("express");
var app = express();
var port = 8000;
app.get("/",(req,res)=>{
    res.send("hello world form ExpressJS: sandy");
});
app.get("/about",(req,res)=>{
    res.send("display from about page: sandy");
})
app.listen(port,()=>{
    console.log("running on port 8000")
});