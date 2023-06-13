const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/id/:id', productControllers.show);

router.get('/add', productControllers.add);
router.post('/add', productControllers.storeProduct);

router.get("/update/:id", productControllers.formUpdate);
router.post("/update/:id", productControllers.updatePost);

router.get('/search', productControllers.search);

router.post('/comentario/:id', productControllers.storeComentario);

router.post('/eliminar', productControllers.eliminarProducto);


module.exports = router;