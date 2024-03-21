import {Game} from '../src/index';

describe("GIVEN a game", () => {
  test('WHEN using constructor THEN should be created', () => {
    const game  = new Game();
    expect(game).not.toBeNull();
  });

  test("WHEN rolling 0, 20 times, THEN score should be 0", () => {
    const game  = new Game();
    for(let i = 1; i <= 20; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(0);
  });

  test("WHEN rolling 1, 20 times, THEN score should be 20", () => {
    const game  = new Game();
    for(let i = 1; i <= 20; i++) {
      game.roll(1);
    }
    expect(game.score).toBe(20);
  });

  test("WHEN rolling 3, 20 times, THEN score should be 20", () => {
    const game  = new Game();
    for(let i = 1; i <= 20; i++) {
      game.roll(3);
    }
    expect(game.score).toBe(60);
  });

  test("WHEN rolling a spare AND all subsequent rolls are 0 THEN score should be 10", () => {
    const game  = new Game();
    game.roll(5);
    game.roll(5);
    for(let i = 1; i <= 18; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(10);
  });

  test("WHEN rolling a spare " +
      "AND then roll a 3 " +
      "AND all subsequent rolls are 0 " +
      "THEN score should be 10", () => {
    const game  = new Game();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for(let i = 1; i <= 17; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(16);
  });

  test("WHEN rolling a spare " +
      "AND then roll a 3 " +
      "AND all subsequent rolls are 0 " +
      "THEN score should be 10", () => {
    const game  = new Game();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(0);
    for(let i = 1; i <= 12; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(32);
  });
});