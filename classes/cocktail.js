const cocktailModel = require('../models/cocktail-model');

class Cocktail {
    constructor(cocktail_obj){
        this._cocktail = cocktail_obj;
    }
    status(){
        return "200 OK";
    }
}

module.exports = Cocktail;