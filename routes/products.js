var express = require("express");
var router = express.Router();
var productControllers = require("../controllers/productControllers");

router.get('/', productControllers.showProduct);

router.get('/add', productControllers.showProductAdd);







module.exports = router;