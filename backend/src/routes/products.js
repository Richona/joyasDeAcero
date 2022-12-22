const express = require('express');
const router = express.Router();

const {all, getOne} = require("../controllers/productsController")

/* /products */
router
    .get('/', all)
    .get('/:id', getOne)

module.exports = router;