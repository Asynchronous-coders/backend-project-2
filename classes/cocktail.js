const cocktailModel = require('../models/cocktail-model');

class Cocktail {
    constructor(cocktail_obj){
        this._cocktail = cocktail_obj;
    }

    get id() {
        return this._cocktail.id;
    }

    get cocktail_name() {
        return this._cocktail.name;
    }

    set cocktail_name(cocktail_name) {
        this._cocktail.name = cocktail_name;
    }

    get ingredients() {
        return this._cocktail.ingredients;
    }

    set ingredients(ingredients) {
        this._cocktail.ingredients = ingredients;
    }

    get directions() {
        return this._cocktail.directions;
    }

    set directions(directions) {
        this._cocktail.directions = directions;
    }

    getLiteral() {
        return this._cocktail;
    }

    async cocktailByName(name) {
        this._cocktail = await cocktailModel.cocktailByName(name);
    }
}

module.exports = Cocktail;