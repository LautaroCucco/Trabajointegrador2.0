module.exports = (sequelize, dataTypes) => {

    let alias = 'User'

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
        tableName: 'users',
        timestamps: false,
        underscored: false,

    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
            User.hasMany(models.product, {
                as: 'product',
                foreignKey: 'users_id'
            })
            User.belongsToMany(models.users, {
                as: 'seguidores',
                through : 'followers',
                foreignKey: 'id_usuario_seguido',
                otherKey: 'id_usuario_seguidor',
                timestamps: false
            }) 
            User.hasMany(models.comment, {
                as: 'comment',
                foreignKey: 'users_id'
            })
    };


    return User;

}