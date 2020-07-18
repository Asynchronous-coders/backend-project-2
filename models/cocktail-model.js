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

exports.updateCocktailById = async (id,cocktail_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE cocktails WHERE id = ?`,[id, cocktail_obj]);
    return data;
}

exports.deleteCocktailById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`DELETE FROM cocktails WHERE id = ?`, id);
    return data;
}