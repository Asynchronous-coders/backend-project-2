const Cocktail = require('../classes/cocktail');

exports.getByName = async (req, res) =>{
    const name =  req.params.name;
    const cocktail = new Cocktail;
    await cocktail.cocktailByName(name);
    res.json(cocktail.getLiteral());
}