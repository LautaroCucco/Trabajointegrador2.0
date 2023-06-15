const db = require('../db/models');
const producto = db.Producto


const indexController = {
     index: (req, res) => {
        producto.findAll(  
        {
            include: [ { association: 'user' }],
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