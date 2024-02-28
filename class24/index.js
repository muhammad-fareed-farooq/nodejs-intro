const fs = require("fs")

const http = require("http")

const server = http.createServer((req,res)=>{
  
    return(
        res.end("server is running!")
    )
})

server.listen(5000)
// const res =  fs.writeFileSync('text.txt','hello')

// const res = fs.readFileSync('text.txt','utf-8')

// console.log(res);


// fs.mkdirSync("new-folder")

// fs.writeFileSync("new-folder/text.text","Nested content")


// const res =fs.readFileSync( "new-folder/text.text","utf-8")

// fs.writeFileSync( "new-folder/index.js","const sum = 'fareed' \n console.log(sum);")

// const res = fs.readFileSync( "new-folder/index.js","utf-8")

// console.log(res);







// console.log(res);


