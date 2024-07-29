const express=require('express');
const app = express();
const port = 3000;
app.get('/search',(req,res)=>{
    const query=req.query.q;
    res.send('search query: ${hello}');
});
app.listen(port,()=>{
    console.log("running on port 3000")
});