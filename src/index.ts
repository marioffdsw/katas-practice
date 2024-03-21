
export class Game {
  score = 0;
  frameScore = 0;
  frameRolls = 0;

  roll(pins: number) {
    this.score += pins;
    this.frameScore += pins;
    this.frameRolls++;

    if(this.frameRolls == 3) {
      if((this.frameScore - pins) == 10) {
        this.score += pins;
      }
      this.frameRolls = 1;
      this.frameScore = pins;
    }
  }

  // roll(pins: number) {
  //   if(this.rolls % 2 == 0) {
  //     if(this.frameRolls == 10) {
  //       this.score += pins;
  //     }
  //     this.frameRolls = 0;
  //   }
  //
  //   this.frameRolls += pins;
  //   this.score += pins;
  //   this.rolls++;
  // }
}
