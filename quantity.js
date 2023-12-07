class Quantity {
    constructor(value, unit) {
        this.value = value
        this.unit = unit
    }

    isEqual(that) {
        let thatInTeaspoons = that.unit.getBaseUnits(that.value)
        let thisInTeaspoons = this.unit.getBaseUnits(this.value)
        return thatInTeaspoons == thisInTeaspoons
    }
}

module.exports = {Quantity}