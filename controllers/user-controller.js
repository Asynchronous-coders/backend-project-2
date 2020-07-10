const User = require('../classes/user');

exports.read = async (req, res) => {
    const id = req.params.id;
    const user = new User();
    await user.getUserById(id);
    res.json(user.getLiteral());
}
exports.newUser = async (req, res) => {
    const user = new User(req.body);
    await user.newUser();
    res.json(user.getLiteral());
}