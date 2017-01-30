class GuessingGame {
    constructor() {
        this.num = 0;
    }
       
    setRange(min, max) {
        this.min = min;
        this.max = max;
     
    }

    guess() {
		return this.num = Math.round( ( this.min + this.max) / 2 );

    }

    lower() {
	this.min = this.num;
    }

    greater() {
	this.min = this.num;
    }
}

module.exports = GuessingGame;
