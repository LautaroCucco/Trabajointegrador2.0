var dataBase = require('../db/data')

var profileControllers = {
    showProfile: function(req, res){
        return res.render('profile',{
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            logueado: dataBase.usuario.logueado, 
            comentarios: dataBase.comentarios,
            
        })
    },
    showProfileEdit: function (req, res) {
        return res.render('profile-edit',{
            usuario: dataBase.usuario,
            logueado:dataBase.usuario
        })
    }
}

module.exports = profileControllers
