const fs = require("fs")

const http = require("http")

// fs.mkdirSync("new")

// fs.writeFileSync("new/text.js","const sum = 'Fareed' ")

// const res =  fs.readFileSync("new/text.js","utf-8")

// console.log(res);


const  server = http.createServer((req,res)=>{
   return(
    res.end("run server")
   )
})

server.listen(5000,()=>{
    console.log("run servsr");
})



