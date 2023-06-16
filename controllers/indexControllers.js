const db = require('../database/models');
const producto = db.Producto


const indexController = {
     index: (req, res) => {
        producto.findAll(  
        {
            include: [ { association: 'perfil' }],
            order: [[ "createdAt" , "DESC"]]
        }
        )
        .then((result) => {
            return res.render('indexx', {producto : result})

        }).catch((err) => {
            console.log(err);
        });
     }, 
}
module.exports = indexController




module.exports = indexController