const {Quantity} = require("./quantity")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./unit")



describe('quantity', () => {
  describe('is equal' , () => {
    test('a tbs is equal to a tbs', () => {
      expect(new Quantity(1, TABLESPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(true)
    });
    test('a tbs is not equal to 2 tbs', () => {
        expect(new Quantity(1, TABLESPOON).isEqual(new Quantity(2, TABLESPOON))).toBe(false)
      });
      test('a tbs is not equal to a tsp', () => {
        expect(new Quantity(1, TEASPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(false)
      });
      test('3 tsp is equal to a tbs', () => {
        expect(new Quantity(3, TEASPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(true)
      });
      test('1 oz is equal to 2 tbs', () => {
        expect(new Quantity(1, OUNCE).isEqual(new Quantity(2, TABLESPOON))).toBe(true)
      });
      test('1 cup is equal to 8 oz', () => {
        expect(new Quantity(1, CUP).isEqual(new Quantity(8, OUNCE))).toBe(true)
      });
      test('1 pint is equal to 2 cups', () => {
        expect(new Quantity(1, PINT).isEqual(new Quantity(2, CUP))).toBe(true)
      });
      test('1 quart is equal to 2 pints', () => {
        expect(new Quantity(1, QUART).isEqual(new Quantity(2, PINT))).toBe(true)
      });
      test('1 gallon is equal to 4 quarts', () => {
        expect(new Quantity(1, GALLON).isEqual(new Quantity(4, QUART))).toBe(true)
      });
      test('32 tablespoons is equal to 2 cups', () => {
        expect(new Quantity(32, TABLESPOON).isEqual(new Quantity(2, CUP))).toBe(true)
      });
      test('32 tablespoons is equal to 2 cups', () => {
        expect(new Quantity(2, CUP).isEqual(new Quantity(32, TABLESPOON))).toBe(true)
      });
  })  
});

