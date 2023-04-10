var dataBase = require('../db/data')

var profileController = {
    showProfile: function(req, res){
        return res.render('profile',{
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            logueado: dataBase.usuario.logueado,
            
        })
    },
    showProfileEdit: function (req, res) {
        return res.render('profile-edit',{
            usuario: dataBase.usuario,
            logueado:dataBase.usuario
        })
    }
}

module.exports = profileController
