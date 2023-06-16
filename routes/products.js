const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/id/:id', productControllers.showProduct);

router.get('/add', productControllers.showProductAdd);
router.post('/add', productControllers.store);



router.get("/update/:id", productControllers.formUpdate);
router.post("/update/:id", productControllers.);

router.get('/search', productControllers.search);

router.post('/comentario/:id', productControllers.);

router.post('/eliminar', productControllers.deleteProduct);


module.exports = router;