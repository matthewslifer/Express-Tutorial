// POST: Inserts data into the database/server
// JavaScript Example

const express = require('express');
const app = express();
const {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse from data
app.use(express.urlencoded({extended:false}));
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({sucess:false, msg: 'please provide name value'});
    }
    res.status(201).json({sucess:true, person:name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({sucess:true, data: [...people,name] })
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000....")
})
