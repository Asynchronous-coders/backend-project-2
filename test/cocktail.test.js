const Cocktail = require('../classes/Cocktail');

test('Can create a new cocktail', () => {
    const c = new Cocktail();
    expect(typeof c).toBe('object');
});
test('Can get name via getName()', () => {
    const name = 1;
    const c = new Cocktail(name);
    expect(c.name).not.toBe(name);
});
