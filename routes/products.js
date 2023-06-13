const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


// Configuracion de Multer para subir foto del producto
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images')) 
    },
    filename : function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage});

// Ruta para mostrar un auto

router.get('/id/:id', productController.showProduct);

//Rutas para comentario

router.post('/id/:id', productController.comments);

// Rutas para eliminar un auto 
router.post('/id/:id/delete', productController.deleteProduct);

// Rutas para agregar un auto
router.get('/add' , productController.showProductAdd);

router.post('/store', upload.single('imgProduct'), productController.store);

// Rutas para EDITAR una publicaion 

router.get('/edit/:id' , productController.showProductEdit);

router.post('/edit/:id', upload.single('imgProduct'), productController.updateProduct);

router.get('/id/:id', productController.show);


router.get('/add', productController.add);
router.post('/add', productController.storeProduct);

router.get("/update/:id", productController.formUpdate);
router.post("/update/:id", productController.updatePost);

router.get('/search', productController.search);

router.post('/comentario/:id', productController.storeComentario);

router.post('/eliminar', productController.eliminarProducto);
module.exports = router;