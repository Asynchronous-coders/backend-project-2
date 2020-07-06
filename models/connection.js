const mysql = require('mysql2/promise');

exports.connect = async () => {
    const connection = await mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
    return connection;
}