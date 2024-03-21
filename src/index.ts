
export class Game {
  score = 0;

  roll(pins: number) {
    this.score += pins;
  }
}
