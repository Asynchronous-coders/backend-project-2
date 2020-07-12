const mysql = require('./connection');

exports.cocktailByName = async (cocktail_name) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM cocktails WHERE cocktail_name = ?;`, cocktail_name);
    return data;
}

exports.insert = async (cocktail_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO cocktails SET ?`, cocktail_obj);
    return data;
}