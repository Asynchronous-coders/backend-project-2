const cocktail = require('./controllers/cocktail-controller');
const user = require('./controllers/user-controller');
//const reviews = require('./controllers/review-controller');


exports.route = (app) => {
    app.get('/cocktail/:name', cocktail.cocktailByName);
    app.post('/cocktail', cocktail.newCocktail);
    
    app.get('/user/:id', user.read);
    app.post('/user', user.newUser);

    app.get('/rating', reviews.readRating);
    app.get('/reviews', reviews.readReviews);

    app.post('/rating', reviews.newRating);
    app.post('/reviews', reviews.newReview);
}