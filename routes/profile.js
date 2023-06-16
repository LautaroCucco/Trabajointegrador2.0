const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers');

//router.get('/', profileController.show);
router.get('/id/:id', profileController.showProfile);

// REGISTER
router.get('/register', profileController.register); 

// LOGIN
router.get('/login', profileController.login);
router.post('/login', profileController.loginPost);
//EDIT
router.get('/edit', profileController.showProfileEdit);
router.post('/edit', profileController.editPost);
//LOGOUT
router.post('/logout', profileController.logout);
module.exports = router;