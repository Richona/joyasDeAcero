const {loadProducts} = require("../data/module")

module.exports = {
    list: (req, res) => {
        
        res.send(loadProducts())
    },
}