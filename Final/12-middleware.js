// Middleware are functions that are excuted during the request to the server
// Middleware functions have access too req and res
const express = require('express');
const app = express();

// req => Middleware => res

// request comes in, we perform some sort of function, and then send out a response
// next() passes the function to the next middleware

const logger = (req,res,next) => {
    const method = req.method;
    const url = req. url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}


app.get('/', logger , (req, res) => {
    res.send("Home");
});

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000....")
})
