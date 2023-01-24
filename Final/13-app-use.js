//APP.USE will invoke the middleware on every route, the order matters

const express = require('express');
const app = express();
const logger = require('./logger')

app.use(logger);

//Will apply the middleware to the APIs
app.use('/api', logger)

app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000....")
})
