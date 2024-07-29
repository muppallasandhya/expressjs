const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.post('/user',(req,res)=>{
    res.send(`hello,${req.body.name}`);
});
    app.listen(port,()=>{
        console.log('server running at 3000:sandhya');
});