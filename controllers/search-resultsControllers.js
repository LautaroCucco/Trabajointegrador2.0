const db = require('../database/models/');
const op = db.Sequelize.Op;
const producto = db.Producto;

const searchResultsController = {
    findProduct: (req, res) => {
        let palabraBuscada = req.query.search;
        let filtro ={
            where :{
             [op.or]: [
               { model: { [op.like]: `%${ palabraBuscada}%` } },
               { description: { [op.like]: `%${ palabraBuscada}%` } }
             ]
           }, 
            include: [ { association: 'usuario' }],
            order: [[ "createdAt" , "DESC"]]
           }
      
        producto.findAll(filtro)
        .then((result) => {
        return res.render('search-results', { producto : result } )
        }).catch((err) => {
            console.log(err);
        });
    }

};

module.exports = searchResultsController;