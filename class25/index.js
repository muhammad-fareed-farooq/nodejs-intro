const express = require('express')

const app = express()

app.use(express.json())

// get

app.get("/task", (req,res)=>{
 return(
    res.json({massage:"Task router get"})
 )
})

//post 

app.post("/task",(req,res)=>{
    console.log(req.body);
    return(
        res.json({massage:"Task router post" , name :"fareed"})
     )
})

app.listen(6000,()=>{
    console.log("Express is run");
})