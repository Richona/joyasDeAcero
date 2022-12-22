const express = require('express');
const router = express.Router();

const {list} = require("../controllers/productsController")

/* /products */
router
    .get('/', list);

module.exports = router;