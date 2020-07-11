const Review = require('../classes/review');

exports.readRating = async (req, res) => {
    const id = req.params.id;
    const review = new Review();
    await review.getByReviewId(id);
    res.json(review.getRating());    
}
exports.readReview = async (req, res) => {
    const id = req.params.id;
    const review = new Review();
    await review.getByReviewId(id);
    res.json(review.getReview());   
}
exports.newRating = async (req, res) => {
    const review = new Review(req.body);
    await review.newRating();
    res.json(review.getRating());    
}
exports.newReview = async (req, res) => {
    const review = new Review(req.body);
    await review.newReview();
    res.json(review.getReview());    
}