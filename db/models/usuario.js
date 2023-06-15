module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuario'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        foto: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: false,

    }

    const Usuario = sequelize.define(alias, cols, config);

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


    return Usuario;

}