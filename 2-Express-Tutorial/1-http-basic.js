const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navebar-app/index.html')
const homeStyle = readFileSync('./navebar-app/styles.css')
const homeLogo = readFileSync('./navebar-app/logo.svg')
const homeLogic = readFileSync('./navebar-app/browser-app.js')

const server = http.createServer((req,res)=>{

    const url = req.url;
    console.log(url)
    //Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()  
    }//About page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }//Style
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }//Logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }//Logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }//404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }

})

server.listen(5000)