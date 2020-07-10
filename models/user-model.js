const mysql = require('./connection');


exports.selectById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM users WHERE (id = 1);`);
    return data;
}