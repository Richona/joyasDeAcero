const express = require('express');
const router = express.Router();

const {list} = require("../controllers/indexController")

/* GET home page. */
router
    .get('/', list);

module.exports = router;
