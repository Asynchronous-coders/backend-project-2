const mysql = require('./connection');

exports.getByReviewId = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews WHERE id = ?;`, id);
    return data;
}
exports.getAllReviews = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews;`);
    return data;
}

exports.newReviewRating = async (reviews_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO reviews SET ?;`,reviews_obj);
    return data;
}

exports.updateReviews = async (id, reviews_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE reviews SET ? WHERE id = ?;`, [reviews_obj, id]);
    return data;
}
