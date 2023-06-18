const db = require('../database/models');
const Usuario = db.Perfil
const bcrypt = require('bcryptjs');
const producto = db.Producto;
const comentario = db.Comentario;

const profileController = {
    showProfile: function (req, res) {
        let id = req.params.id;
        let relaciones = {include: {all:true, nested: true}};
        user.findByPk(id, relaciones)
        .then(function (result){
            let miSession = req.session.user;
            let elMismoUser = false;
            if (miSession != undefined && id == req.session.user.id){
                res.locals.user = resultado.dataValues;
                elMismoUser = true;
            }
            return res.render("profile",{
                perfil: result, userCorrecto: elMismoUser
            })
            // include:
            // {
            //     all: true,
            //     nested: true
            // }
        })
            // .then((result) => {
            //     // return res.send(result)
            //     return res.render('perfil', { perfil: result.dataValues })
            // }).catch((err) => {
            //     console.log(err);
            // });
    },

    login: function (req, res) {
        return res.render('login')
    },
    procesarLogin: function (req, res) {
        let info = req.body
        let filtro = {
            where: [{
                email: info.email
            }]
        };
            Usuario.findOne(filtro)
                .then((result) => {

                    if (result != null) {
                        let passEncriptada = bcrypt.compareSync(info.contrasena, result.contrasena);
                        if (passEncriptada) {

                            req.session.user = result.dataValues;

                            if (req.body.recordarme != undefined) {
                                res.cookie('users_id', result.dataValues.id, { maxAge: 1000 * 60 * 100 })
                            }

                            return res.redirect("/")

                        }
                    } 
                }).catch((err) => {
                    console.log(err);
                });

    },
    register: function (req, res) {
        return res.render('register')
    },
    procesarRegister: function (req, res) {
        let info = req.body;
        let filtro = {
            where: [{
                email: info.email
            }]
        };
        Usuario.findOne(filtro)
                .then((result) => {
            if(result == null){
                let usuario = {
                            nombre: info.nombre,
                            apellido: info.apellido,
                            email: info.email,
                            contrasena: bcrypt.hashSync(info.contrasena, 10),
                            foto: info.foto,
                        };
                        Usuario.create(usuario)
                            .then((result) => {
                                return res.redirect('/profile/login')
                            }).catch((err) => {
                                console.log(err);
                        })    
                    }    
                })
    },
    loginPost: (req, res) => {
        let emailBuscar = req.body.email;
        let contraseniaBuscar = req.body.contrasenia;

        let filtrado = {
            where: [
                {email: emailBuscar}
            ]
        }
        let errors = {}

        if (emailBuscar == undefined ) {
            errors.message = 'No hay ningun mail ingresado';
            res.locals.errors = errors;
            return res.render('login')

        } else if (contraseniaBuscar.length < 3) {
            errors.message = 'Su contraseña neceista al menos 3 digitos';
            res.locals.errors = errors;
            return res.render('login')
        } else {
        
            perfil.findOne(filtrado)
            .then((result) => {

                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(contraseniaBuscar, result.contrasenia);
                    if (claveCorrecta) {
                        req.session.user = result.dataValues;
                        if (req.body.rememberme != undefined) {
                            res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 100 })
                        }
                        return res.redirect("/")

                    } else {
                        errors.message = 'Email existente, contraseña equivocada';
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                } else {
                    errors.message = 'El email ingresado no esta registrado';
                    res.locals.errors = errors;
                    return res.render('login')
                }
            }).catch((err) => {
                console.log(err);
            }); 
        }    


    },
    editPost: (req, res) => {
        let infoPerfil = req.body;
        let id = req.session.user.id;
        let filtrado = {
          where : [
            {id: id}
          ]
        }
        perfil.update(infoPerfil, filtrado)
        .then((resultado) => {
            
          return res.redirect("/profile/id/" + id)
        }).catch((err) => {
          console.log(err);
        });
    },
    
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('users_id');
        return res.redirect('/')
    },

    showProfileEdit: (req, res) => {
        let id = req.params.id;
        user.findByPk(id).then((result) => {
        return res.render('profile-edit', {usuario : result})
        }).catch((err) => {
            console.log(err);
        });
    },

    updateProfile: (req, res) => {
            let info = req.body;
            let foto_perfil = req.file.filename;
            let usuario = {
                email: info.email,
                nombre: info.nombre,
                apellido: info.apellido,
                foto: foto_perfil,
                users_id : info.usuario_id
            }
            let filtro = {
                where: {
                    id: req.params.id
                }
            
            }
            if (req.params.id != usuario.users_id) {
                return res.redirect('/profile/login')
            }
            else {
                user.update(usuario, filtro)
            .then((result) => {
                console.log(req.params.id);
                console.log(usuario.users_id);
                req.session.user = result.dataValues;
                return res.redirect('/profile/' + req.params.id)
            }).catch((err) => {

            });
            }
            
    
    },
    follow: (req,res) => {
        let filtro = {
            where: [
                {   id_usuario_seguido: req.params.id,
                    id_usuario_seguidor: req.session.user.id 
                }
            ]
        }
        follower.findOne(filtro, {
            include: {
                all: true,
                nested: true
            }
        }).then((result) => {
            if (result != null) {
                user.findByPk(req.params.id, {
                    include: {
                        all: true,
                        nested: true
                    }
                }).then((result) => {
                    let errors = { };
                    errors.message = "Ya estas siguiendo a este usuario";
                    res.locals.errors = errors
                    return res.render('perfil', {perfil: result})
                }).catch((err) => {
                    
                });
            } else {
                let info = req.body;
                let seguimiento = {
                    id_usuario_seguidor: info.id_usuario_seguidor,
                    id_usuario_seguido: info.id_usuario_seguido
                }
                follower.create(seguimiento)
                .then((result) => {
                    res.redirect(`/perfil/${info.id_usuario_seguido}`)
                }).catch((err) => {
                    console.log(err);
                });
            }
        }).catch((err) => {
            
        });
    }
};

module.exports = profileController;
