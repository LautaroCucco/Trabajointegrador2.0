// module.exports = (sequelize, dataTypes) => {

//     let alias = 'Comentario'

//     let cols = {
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: dataTypes.INTEGER,
//         },
//         texto_comentario : {
//             type: dataTypes.STRING,
//         },
//         producto_id: {
//             type: dataTypes.INTEGER,
//         },
//         usuario_id: {
//             type: dataTypes.INTEGER

//         },

//     }

//     let config = {
//         timestamps: true,
//         createdAt: 'createdAt',
//         updatedAt: 'updatedAt',
//         deletedAt: 'deletedAt'
//     }

//     const Comentario = sequelize.define(alias, cols, config);

//     //  Comentario.associate = function (models) {
//     //     Comentario.belongsTo(models.Product, {
//     //         as: 'Producto',
//     //         foreignKey : 'producto_id'
//     //     })
//     //     Comentario.belongsTo(models.User, {
//     //         as : 'Usuario',
//     //         foreignKey : 'usuario_id'
//     //     })
//     // }

//     return Comentario;

// }

module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        products_id: {
            type: dataTypes.INTEGER,
        },
        users_id: {
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING(500),
        },
       
        
    };
    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true,
    };

    const Comentario = sequelize.define(alias,cols,config);
    //relaciones

    Comentario.associate = function(models) {
        // Un perfil --> muchos comentarios
        Comentario.belongsTo(models.Perfil , {
            as: "usuario",
            foreignKey: "users_id"
        }),
        // Un producto --> muchos comentarios
        Comentario.belongsTo(models.Producto , {
            as: "producto",
            foreignKey: "products_id"
        })
    };

    return Comentario;
};