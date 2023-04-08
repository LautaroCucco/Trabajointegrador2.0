var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexControllers");

router.get('/', indexController.showIndex);

router.get('/login', indexController.showLogin);

router.get('/register', indexController.showRegister);





module.exports = router;
