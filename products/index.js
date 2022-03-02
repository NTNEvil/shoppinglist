// express 
const express = require('express')
const router = express.Router()

// path
const path = require('path')

// aux
const Repository = require('./repository')
const repository = new Repository()

// config variables
const basePath = path.join(__dirname, '../templates')

// routes
router.get('/add', (req, res) => {
    res.sendFile(path.join(basePath, 'productform.html'))
})

router.post('/save', (req, res) => {
    repository.save(req.body)
    res.sendFile(path.join(basePath, 'productform.html'))
})

router.get('/:id', (req, res) => {
    const name = req.params.id

    const product = repository.get(name)

    if (product) {
        res.sendFile(path.join(basePath, 'product.html'))
    } else {
        res.sendFile(path.join(basePath, '404.html'))
    }
})

module.exports = router