const Class = require('../classes/class');

exports.status = async (req, res) =>{
const check =  new Class();
const status = await check.status();
res.json(status);
}