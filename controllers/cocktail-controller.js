const Cocktail = require('../classes/cocktail');

exports.status = async (req, res) =>{
const check =  new Cocktail();
const status = await check.status();
res.json(status);
}