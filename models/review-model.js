const mysql = require('./connection');

exports.getByReviewId = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews WHERE id = ?;`, id);
    console.log(data);
    return data;
}
//Thought-- a way to manipulate the data in the controller to limit setting the review/rate and or combining them.
exports.newRating = async (reviews_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO reviews SET ?;`,reviews_obj);
    return data;
}
exports.newReview = async (reviews_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO reviews SET ?;`,reviews_obj);
    return data;
}