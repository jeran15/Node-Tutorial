# Express Js
    - Express.js is a fast, minimal, and flexible web application framework for Node.js. It is widely used for building robust web applications and APIs. Express simplifies server-side development by providing a rich set of features and middleware that make handling HTTP requests, routing, and integration with databases easier.

    npm install express --save

# Query String 
    - Using URL to sent small amount of data

# Middleware
    - In Express.js, middleware refers to functions that execute during the lifecycle of a request to the server. 
    -  Middleware functions have access to the request (req) and response (res) objects, and the next() function, which passes control to the next middleware in the stack.

# APP.USE

    - There are two about make app.js 
        1. If we make 50+ routes we cannot manualy setup logger function all of them 
        2. Keep like middleware function
    
    - In Express.js, app.use() is a method used to add middleware to your application.
    - Middleware functions are pieces of code that run during the request-response cycle, allowing you to modify the request object, response object, or perform specific operations before passing control to the next middleware.

    

