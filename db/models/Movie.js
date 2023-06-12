module.exports = function(sequelize, dataTypes){
    let alias = "Movie"; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        created_At: {
            type: dataTypes.DATE
        },
        updated_At: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tablename: "movies"
    }
}

let movie = sequalize.define(alias,cols,config);
return movie