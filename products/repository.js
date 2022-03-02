class Repository {

    constructor() {
        this.fs = require('fs')
    }

    save(product) {
        console.log(product)

        if (!this.fs.existsSync('database')) {
            this.fs.mkdirSync('database')
        }

        this.fs.writeFileSync(
            `database/${product.name}.json`,
            JSON.stringify(product),
            err => console.log(err))
    }

    get(nameProduct){
        if (this.fs.existsSync(`database/${nameProduct}.json`)){
            const productFile = this.fs.readFileSync(`database/${nameProduct}.json`, {
                encoding: 'utf8',
                flags: 'r'
            })
        
            const productJSON = JSON.parse(productFile)

            console.log(productJSON)
            return productJSON
        } else {
            console.log('Produto não encontrado')
            return null
        }
    }
}

module.exports = Repository