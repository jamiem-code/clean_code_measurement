const {Quantity} = require("./quantity")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./unit")



describe('quantity', () => {
  describe('volume', () => {
    describe('is equal' , () => {
      test('a tbsp is equal to a tbsp', () => {
        expect(new Quantity(1, TABLESPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(true)
      });
      test('a tbsp is not equal to 2 tbsp', () => {
          expect(new Quantity(1, TABLESPOON).isEqual(new Quantity(2, TABLESPOON))).toBe(false)
        });
        test('a tbsp is not equal to a tsp', () => {
          expect(new Quantity(1, TEASPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(false)
        });
        test('3 tsp is equal to a tbsp', () => {
          expect(new Quantity(3, TEASPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(true)
        });
        test('1 oz is equal to 2 tbsp', () => {
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
    });
    describe('quantities can be added' , () => {
      test('1 tbsp add nothing is still 1 tbsp',() => {
        let total = new Quantity(1, TABLESPOON).add(new Quantity(0,TEASPOON));
        expect(total.isEqual(new Quantity(1, TABLESPOON))).toBe(true);
      });
      test('1 tbsp add 1 tbsp is eq 2 tbsp',() => {
        let total = new Quantity(1, TABLESPOON).add(new Quantity(1,TABLESPOON));
        expect(total.isEqual(new Quantity(2, TABLESPOON))).toBe(true);
      });
      test('1 tbsp add 3 tsps is eq 2 tablespoon',() => {
        let total = new Quantity(1, TABLESPOON).add(new Quantity(3, TEASPOON));
        expect(total.isEqual(new Quantity(2, TABLESPOON))).toBe(true);
        expect(total.isEqual(new Quantity(6, TEASPOON))).toBe(true);
      });
    });
  }); 
  describe('Distance', () => {
    describe('is equal' , () => {
      test('12 inches is equal to 1 foot', () => {
        expect(new Quantity(12, INCH).isEqual(new Quantity(1, FOOT))).toBe(true)
      });
    });
  });
});

