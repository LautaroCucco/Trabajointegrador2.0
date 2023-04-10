var dataBase = require ('../db/data');

var indexController = {
    showIndex: function (req, res){
        return res.render('index',{
            usuario: dataBase.usuario,
            productos: dataBase.productos, 

        })
    },
}





module.exports = indexController