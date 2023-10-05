const {Chance} = require("./chance")

describe('Chance...', () => {
    test('is equal to a chance with the same likelihood', () => {
        expect(new Chance(0.3).equals(new Chance(0.3))).toBe(true);
    })
})