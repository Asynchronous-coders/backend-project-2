const cocktail = require('./controllers/cocktail-controller');
const user = require('./controllers/user-controller');
const reviews = require('./controllers/review-controller');


exports.route = (app) => {
    app.get('/cocktail/:name', cocktail.cocktailByName);
    app.post('/cocktail', cocktail.newCocktail);
    
    app.get('/user/:id', user.read);
    app.post('/user', user.newUser);

    app.get('/rating/:id', reviews.readRating);
    app.get('/review/:id', reviews.readReview);
    app.get('/reviews', reviews.readAllReviews);
    app.get('/reviews/cocktail/:id', reviews.getAllByCocktailId);
    app.get('/review/average/:id', reviews.readAverageRate)

    app.post('/reviews', reviews.newReviewRating);

    app.patch('/reviews/:id', reviews.updateReviews);
}