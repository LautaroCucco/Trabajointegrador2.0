var express = require('express');
var router = express.Router();
var profileController = require("../controllers/profileControllers");

router.get('/', profileController.showProfile);

router.get('/edit', profileController.showProfileEdit);







module.exports = router;