
export class Game {
  score = 0;
  rolls = 0;
  frameScore = 0;
  isStrike = 0;

  roll(pins: number) {
    if(this.rolls % 2 == 0) {
      if(this.frameScore == 10) {
        this.score += pins;
      }
      this.frameScore = 0;
    }

    this.frameScore += pins;
    this.score += pins;
    this.rolls++;

    if(this.isStrike > 0 && this.rolls % 2 != 0) {
      this.score += pins;
      this.isStrike = 0;
    }

    this.isStrike--;
    this.verifySkipTurn();
    // console.log("score ", this.score, "frameScore ", this.frameScore, "rolls ", this.rolls, "isStrike ", this.isStrike)
  }

  private verifySkipTurn() {
    if (this.frameScore == 10 && (this.rolls - 1) % 2 == 0) {
      this.rolls++;
      this.isStrike = 2;
    }
  }
}
