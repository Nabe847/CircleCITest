const double = require('./double');

test('double 2 to be equal 4', () => {
    const result = double(2);

    expect(result).toBe(4);
});
