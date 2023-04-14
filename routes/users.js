var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profileControllers')
/* GET users listing. */
router.get('/', profileController.showProfile);

module.exports = router;
