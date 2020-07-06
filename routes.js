const controller = require('./controllers/controls');

exports.route = (app) => {
    app.get('/status',controller.status);
}