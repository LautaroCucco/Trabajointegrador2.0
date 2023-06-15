module.exports = (sequelize, dataTypes) => {

    let alias = 'Producto'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.STRING,
        },
        photo: {
            type: dataTypes.STRING,
        },
        model: {
            type: dataTypes.STRING

        },
        users_id: {
            type: dataTypes.INTEGER,
        }

    }

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }


    const Producto = sequelize.define(alias, cols, config);

    // Producto.associate = function (models) {
    //     Producto.belongsTo(models.users, {
    //         as : 'Usuario',
    //         foreignKey: 'usuario_id'
    //     }),
    //     Producto.hasMany(models.comment, {
    //         as: 'Comentario',
    //         foreignKey : 'producto_id'
    //     } )
    // };




    return Producto;

}