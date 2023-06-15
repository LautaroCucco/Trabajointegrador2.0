module.exports = (sequelize, dataTypes) => {

    let alias = 'Comentario'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto_comentario : {
            type: dataTypes.STRING,
        },
        producto_id: {
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER

        },

    }

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }

    const Comentario = sequelize.define(alias, cols, config);

    //  Comentario.associate = function (models) {
    //     Comentario.belongsTo(models.Product, {
    //         as: 'Producto',
    //         foreignKey : 'producto_id'
    //     })
    //     Comentario.belongsTo(models.User, {
    //         as : 'Usuario',
    //         foreignKey : 'usuario_id'
    //     })
    // }

    return Comentario;

}