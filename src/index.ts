
export class Game {
  rollCount = 0;
  lastFrameScore = 0;
  score: number = 0

  roll(pins: number) {
    this.score += pins;

    if(this.rollCount == 2) {
      this.rollCount = 0;
      if (this.lastFrameScore == 10) {
        this.score += pins;
      }
      this.lastFrameScore = 0;
    } else {
      this.lastFrameScore += pins;
    }

    this.rollCount++;
  }
}
