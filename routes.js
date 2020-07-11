const cocktail = require('./controllers/cocktail-controller');
const user = require('./controllers/user-controller');
const reviews = require('./controllers/review-controller');

exports.route = (app) => {
    app.get('/status', cocktail.status);
    app.get('/user/:id', user.read);
    app.post('/user', user.newUser);

    app.get('/rating/:id', reviews.readRating);
    app.get('/review/:id', reviews.readReview);

    app.post('/rating', reviews.newRating);
    app.post('/review', reviews.newReview);
}