const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware => res
app.use([logger,authorize])

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h4>About Page</h4>')
})
app.get('/products',(req,res)=>{
    res.send('products')
})
app.get('/items',(req,res)=>{
    res.send('items')
})
app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})
