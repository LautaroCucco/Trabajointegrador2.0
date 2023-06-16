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
        texto: {
            type: dataTypes.STRING(500),
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_perfil: {
            type: dataTypes.INTEGER,
        }
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
            foreignKey: "id_perfil"
        }),
        // Un producto --> muchos comentarios
        Comentario.belongsTo(models.Producto , {
            as: "producto",
            foreignKey: "id_producto"
        })
    };

    return Comentario;
};