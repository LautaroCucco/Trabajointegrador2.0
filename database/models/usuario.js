// module.exports = function (sequelize, dataTypes) => {

//     let alias = 'Usuario'

//     let cols = {
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: dataTypes.INTEGER,
//         },
//         email: {
//             type: dataTypes.STRING,
//         },
//         nombre: {
//             type: dataTypes.STRING,
//         },
//         apellido: {
//             type: dataTypes.STRING
//         },
//         contrasena: {
//             type: dataTypes.STRING,
//         },
//         foto: {
//             type: dataTypes.STRING,
//         }
//     }

//     let config = {
//         tableName: 'usuarios',
//         timestamps: false,
//         underscored: false,

//     }

//     const Usuario = sequelize.define(alias, cols, config);

    // Usuario.associate = function (models) {
    //         Usuario.hasMany(models.product, {
    //             as: 'Producto',
    //             foreignKey: 'usuario_id'
    //         })
    //         Usuario.belongsToMany(models.users, {
    //             as: 'seguidores',
    //             through : 'seguidores',
    //             foreignKey: 'id_usuario_seguido',
    //             otherKey: 'id_usuario_seguidor',
    //             timestamps: false
    //         }) 
    //         Usuario.hasMany(models.comment, {
    //             as: 'Comentario',
    //             foreignKey: 'users_id'
    //         })
    // };


//     return Usuario;

// }

module.exports = function (sequelize, dataTypes) {
    let alias = 'Perfil';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre: {
            type: dataTypes.STRING(50),
        },
        apellido:{
            type:dataTypes.STRING(50),
        },
        email: {
            type: dataTypes.STRING(50),
        },
        contrasena: {
            type: dataTypes.STRING(250),
        },
        foto: {
            type: dataTypes.STRING(200),
        },
        
        //foreign key
    };
    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true,
    };

    const Perfil = sequelize.define(alias,cols,config);
    //relaciones
    Perfil.associate = function(models) {
        // Un perfil --> muchos productos
        Perfil.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "users_id"
        }),
        // Un perfil --> muchos comentarios
        Perfil.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "users_id"
        })
       };
    return Perfil;
}
