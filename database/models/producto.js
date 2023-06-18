// module.exports = (sequelize, dataTypes) => {

//     let alias = 'Producto'

//     let cols = {
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: dataTypes.INTEGER,
//         },
//         description: {
//             type: dataTypes.STRING,
//         },
//         photo: {
//             type: dataTypes.STRING,
//         },
//         model: {
//             type: dataTypes.STRING

//         },
//         users_id: {
//             type: dataTypes.INTEGER,
//         }

//     }

//     let config = {
//         timestamps: true,
//         createdAt: 'createdAt',
//         updatedAt: 'updatedAt',
//         deletedAt: 'deletedAt'
//     }


//     const Producto = sequelize.define(alias, cols, config);

//     // Producto.associate = function (models) {
//     //     Producto.belongsTo(models.users, {
//     //         as : 'Usuario',
//     //         foreignKey: 'usuario_id'
//     //     }),
//     //     Producto.hasMany(models.comment, {
//     //         as: 'Comentario',
//     //         foreignKey : 'producto_id'
//     //     } )
//     // };




//     return Producto;

// }

module.exports = function (sequelize, dataTypes) {
    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        users_id:{
            type: dataTypes.INTEGER,
        },
        photo:{
            type: dataTypes.STRING(1000),
        
        model: {
            type: dataTypes.STRING(100),
        },
        description:{
            type: dataTypes.STRING(500),
        },
        },
    };
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true,
    };

    const Producto = sequelize.define(alias,cols,config);
    //relaciones

    Producto.associate = function(models) {
        // Un perfil --> muchos productos
        Producto.belongsTo(models.Perfil , {
            as: "perfil",
            foreignKey: "users_id"
        }),
        // Un producto --> muchos comentarios
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "products_id"
        })
    };

    return Producto;
}