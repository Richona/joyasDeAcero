const express = require('express');
const router = express.Router();

const {list} = require("../controllers/indexController")

/* / */
router
    .get('/', list);

module.exports = router;
