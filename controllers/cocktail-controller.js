const Cocktail = require('../classes/cocktail');

exports.cocktailByName = async (req, res) => {
    const name =  req.params.name;
    const cocktail = new Cocktail;
    await cocktail.cocktailByName(name);
    res.json(cocktail.getLiteral());
}

exports.newCocktail = async (req, res) => {
    const cocktail = new Cocktail(req.body);
    await cocktail.newCocktail();
    res.json(cocktail.getLiteral());
}  