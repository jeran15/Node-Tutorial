const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('User hit the request')
    res.end('Home page')
})

server.listen(5000)