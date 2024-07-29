const express = require("express");
const app = express();
const port = 3000;
app.get('/user/:id',(req,res)=>{
    res.send('User ID: ${req.params.id}');
});
app.listen(port, ()=>{
    console.log('server running at 3000 : sandy')
});