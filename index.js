// express
const express = require('express')
const app = express()

// path
const path = require('path')

// modules routers
const products = require('./products')

// config variables
const port = 5000
const basePath = path.join(__dirname, 'templates')

// body parser
app.use(express.urlencoded({extended: true}))

app.use(express.json())

// statics
app.use(express.static('public'))

// routes
app.use('/products', products)

app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(basePath, '404.html'))
})

app.listen(port, () => {
    console.log(`Serve running on port ${port}`)
    console.log(`http://localhost:${port}/`)
})