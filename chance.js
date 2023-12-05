class Chance {

    constructor(likelihood){
        this.likelihood = likelihood;
    }

    getLikelihood() {
        return this.likelihood
    }

    isImpossible() {
        return this.likelihood === 0;
    }

    isCertain() {
        return this.likelihood === 1;
    }

    isEqual(chance) {
        return chance.getLikelihood() === this.likelihood;
    }

}

module.exports = {Chance}