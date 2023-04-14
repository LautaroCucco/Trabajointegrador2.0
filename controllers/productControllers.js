var dataBase = require ('../db/data');

var productController = {
    showProduct: function (req, res){
        return res.render('product',{
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            comentarios: dataBase.comentarios,
            logueado: dataBase.usuario.logueado
        })
    },
    showProductAdd: function (req,res){
        return res.render('product-add',{
            usuario: dataBase.usuario,
            logueado: dataBase.usuario.logueado
        })
    }
}

module.exports = productController