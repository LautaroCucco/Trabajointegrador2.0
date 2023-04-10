var dataBase = require ('../db/data');

var productController = {
    showProduct: function (req, res){
        return res.render('producto',{
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            comentarios: dataBase.comentarios,
        })
    }
}