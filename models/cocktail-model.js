const mysql = require('./connection');

exports.cocktailByName = async (cocktail_name) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM cocktails WHERE cocktail_name = ?;`, cocktail_name);
    return data;
}