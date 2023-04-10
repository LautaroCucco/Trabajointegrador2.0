var dataBase = require('../db/data')

var searchResultsControllers = {
    showSearchResults: function(req, res){
        return res.render('search-results',{
            usuario: dataBase.usuario,
            productos: dataBase.productos,
            logueado: dataBase.usuario.logueado
        })
    }
};

module.exports = searchResultsControllers;