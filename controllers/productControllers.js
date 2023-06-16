const db = require('../database/models');
const producto = db.Producto;
const comentario = db.Comentario;

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        
        let filtro = {
            include : {
                all: true,
                nested: true
            },
            order : [["comment", "createdAt" , "DESC"]]
        };

        producto.findByPk(id, filtro)
            .then((result) => {
                return res.render('producto', { producto: result.dataValues })
            }).catch((err) => {
                console.log(err);
            });
    },
    showProductAdd: function (req, res) {
        return res.render('product-add');
    },

    store: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/profile/login')
        } 
        
        let info = req.body;
        let imgProducto = req.file.filename;
        let car = {
            photo: imgProducto,
            nombre_producto: info.nombre_producto,
            descripcion_producto: info.descripcion,
            usuario_id: req.session.user.id
        };
        let errors = {};
         if (info.nombre_producto == "") {
            errors.message = 'A model is required';
            res.locals.errors = errors;
            return res.render('product-add')

            
        } else if (info.descripcion == "") {
            errors.message = 'A description is needed';
            res.locals.errors = errors;
            return res.render('product-add')


        } else if (imgProducto == undefined) {
            errors.message = 'An image is required';
            res.locals.errors = errors;
            return res.render('product-add')


        } else{ producto.create(car)
            .then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                return res.send('Hay un error' + err)
            });}

    },
    showProductEdit: (req, res) => {
        let id = req.params.id;
        let filtro = {
            include : {
                all: true,
                nested: true
            }
        }
        producto.findByPk(id, filtro).then((result) => {
            return res.render('product-edit', { producto: result.dataValues });
        }).catch((err) => {
            console.log(err);
        });
    },
    updateProduct: (req, res) => {
            let info = req.body;
            let imgProducto = req.file.filename;
            let car = {
                photo: imgProducto,
                nombre_producto: info.nombre_producto,
                descripcion_producto: info.descripcion,
                usuario_id: req.session.user.id
            }
    
            let filtro = {
                where: {
                    id: req.params.id
                }
            };

            if(req.session.user.id == car.usuario_id) {
            producto.update(car, filtro)
            .then((result) => {
                console.log(car.usuario_id);
                console.log(car.usuario_id);
                return res.redirect('/')
            }).catch((err) => {
                console.log(err);
            });
            }
            else {
                console.log(car.usuario_id);
                console.log(car.usuario_id);
                return res.redirect('/profile/login')
            }
    
        
    },
    updatePost: (req, res) => {
        let id = req.params.id;
        let infoProd = req.body;
      

        let filtrado = {
         where : [
              {id: id}
            ]}
         producto.update(infoProd, filtrado)
        .then((resultado) => {
         return res.redirect("/product/id/" + id )
        }).catch((err) => {
            console.log(err);
        });

    },
    search: (req, res) => {
        let busqueda = req.query.search;

        let filtrado = {
          include: {
            all:true,
            nested: true
          },
          where: [
              {[op.or]: [
                { nombre: { [op.like]: '%' + busqueda + '%' } },
                { descripcion: { [op.like]: '%' + busqueda + '%' } }
              ]}
          ],
          order:[["created_at", 'DESC' ]]
          }
        producto.findAll(filtrado)
        .then((result)=>{
          //res.send(result)
            return res.render("search-results", {
                busqueda: busqueda,
                listaProductos:result
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    },
    storeComentario: (req, res) => {
        let errors = {}
        let id = ''
        if (req.session.user != undefined) {
          id = req.session.user.id
        } 
        
        let coment = {
          texto: req.body.comentario,
          id_producto: req.params.id,
          id_perfil: id 
  
       }
       
      comentario.create(coment)
       .then( function(resultado){
        let id_producto = req.params.id
           return res.redirect(`/product/id/${id_producto}`)
          })
       .catch (function(err){
          console.log(err)
      });
    },
    deleteProduct: (req, res) => {
        let id = req.params.id;
        let info = req.body
        let car = {
            users_id : info.users_id
        }
        if (req.session.user.id == car.usuario_id) {
            producto.destroy({
                where: {
                    id: id
                }
            }).then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                res.send(err)
            });
        }
        else {
            return res.redirect('/profile/login')
        }
      
    },
    comments: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/profile/login')
        } 

        let info = req.body;
        let comentario = {
            texto_comentario: info.comentario,
            producto_id: req.params.id,
            usuario_id: req.session.user.id,
        }
        comentario.create(comentario)
        .then((result) => {
            // return res.redirect('/products/id/' + req.params.id)
        }).catch((err) => {
            console.log(err);
        });
       
    },
    formUpdate: (req, res) =>{
        return res.send("hola")
    }

};

module.exports = productController;