const reviewModel = require('../models/review-model');

class Review {
    constructor(review_obj) {
        this._review = review_obj;
    }
    get id(){
        return this._review.id;
    }

    get rate_cocktail(){
        return this._review.rate_cocktail;
    }
    set rate_cocktail(rate_cocktail){
        this._review.rate_cocktail = rate_cocktail;
    }

    get review_cocktail(){
        return this._review.review_cocktail;
    }
    set review_cocktail(review_cocktail){
        this._review.review_cocktail = review_cocktail;
    }

    get user_id(){
        return this._review.user_id;
    }
    set user_id(user_id){
        this._review.user_id = user_id;
    }

    get cocktail_id(){
        return this._review.cocktail_id;
    }
    set cocktail_id(cocktail_id){
        this._review.cocktail_id = cocktail_id;
    }


    getLiteral(){
        return this._review;
    }
    getRating(){
        return this._review[0].rate_cocktail;
    }
    getReview(){
        return this._review[0].review_cocktail;
    }

    async getByReviewId(id){
        this._review = await reviewModel.getByReviewId(id);
    }
    async newRating() {
        const results = await reviewModel.newRating(this._review);
        this._review.id = results.insertId;
    }
    async newReview() {
        const results = await reviewModel.newReview(this._review);
        this._review.id = results.insertId;
    }
}
module.exports = Review;