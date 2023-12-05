const {Chance} = require("./chance")

describe('Chance...', () => {
    test('the chance of a null event is impossible', () => {
      assert(new Chance(0).isImpossible()) === true
    })
})