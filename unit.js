class Unit {
    constructor(relativeUnitMultiplier, relativeUnit = null) {
        this.relativeUnitMultiplier = relativeUnitMultiplier
        this.baseUnitMultiplier = this.relativeUnitMultiplier * (relativeUnit?.baseUnitMultiplier ?? 1)
        this.relativeUnit = relativeUnit
    }

    getBaseUnits(amount) {
        return amount * this.baseUnitMultiplier;
    }

    getConvertedAmount(otherUnit, otherValue) {
        return otherValue * otherUnit.baseUnitMultiplier / this.baseUnitMultiplier;
    }
}


const TEASPOON = new Unit(1)
const TABLESPOON = new Unit(3, TEASPOON)
const OUNCE = new Unit(2, TABLESPOON)
const CUP = new Unit(8, OUNCE)
const PINT = new Unit(2, CUP)
const QUART = new Unit(2, PINT)
const GALLON = new Unit(4, QUART)

const INCH = new Unit (1)
const FOOT = new Unit(12, INCH)
const YARD = new Unit(3, FOOT)
const FURLONG = new Unit(220, YARD)
const MILE = new Unit(8, FURLONG)

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON, FOOT, INCH, YARD, FURLONG, MILE}





