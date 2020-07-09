const cocktail = require('./controllers/cocktail-controler');

exports.route = (app) => {
    app.get('/status',cocktail.status);
}