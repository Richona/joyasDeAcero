const {loadProducts} = require("../data/module")

module.exports = {
    all: (req, res) => {
        return res.send(loadProducts())
    },
    getOne: (req, res) => {

        const productSearch = loadProducts().find(product => product.id === +req.params.id)
        !productSearch &&  res.send("El id no existe")

        res.send(productSearch)
    },
}