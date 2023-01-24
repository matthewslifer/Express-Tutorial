const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req,res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>')

})

app.listen(3000, () => {
    console.log('server is listening on port 3000....')
})

// Most Common Methods
// app.get: get all orders
// app.post: place an order (send data)
// app.put: update specific order (params + sent data)
// app.delete: delete order (path prarams)
// app.all
// app.use: middleware
// app.listen
