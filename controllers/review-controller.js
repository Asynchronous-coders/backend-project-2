const Review = require('../classes/review');

exports.readRating = (req, res) => {
    const id = req.params.id;
    const review = new Review();
    await review.getByReviewId(id);
    res.json(review.getRating());    
}
exports.readReview = (req, res) => {
    const id = req.params.id;
    const review = new Review();
    await review.getByReviewId(id);
    res.json(review.getReview());   
}
exports.newRating = (req, res) => {
    const review = new Review(req.body);
    await review.newRating();
    res.json(review.getLiteral());    
}
exports.newReview = (req, res) => {
    const review = new Review(req.body);
    await review.newReview();
    res.json(review.getLiteral());    
}