class Quantity {
    constructor(value, unit) {
        this.value = value
        this.unit = unit
    }

    isEqual(other) {
        let otherAmountInBaseUnits = other.unit.getBaseUnits(other.value);
        let thisAmountInBaseUnits = this.unit.getBaseUnits(this.value);
        return otherAmountInBaseUnits == thisAmountInBaseUnits;
    }

    add(other) {
        let otherEquivalentAmount = this.unit.getConvertedAmount(other.unit, other.value);
        let newAmount = this.value + otherEquivalentAmount;
        return new Quantity(newAmount, this.unit);
    }
}

module.exports = {Quantity}