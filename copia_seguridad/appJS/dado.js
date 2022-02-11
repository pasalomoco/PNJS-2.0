class Dice {

    constructor (dice){
      this.dice = dice;
    }
  
    roll () {
      var randomNumber = Math.floor(Math.random() * this.dice) + 1;
      return parseInt(randomNumber);
    }
  
}