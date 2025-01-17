const express = require('express')
const app = express()
const { products } = require('./data')

//req => middleware => res
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year);
    next()
}

app.get('/',logger,(req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.get('/about',logger,(req,res)=>{
    res.send('<h4>About Page</h4>')
})
app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})
