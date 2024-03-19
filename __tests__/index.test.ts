import {Game} from '../src/index';

describe("GIVEN a game", () => {
  test('WHEN using constructor THEN should be created', () => {
    const game  = new Game();
    expect(game).not.toBeNull();
  });

  function gameWithoutBonus(game: Game, pins: number) {
    for (let i = 0; i <= 19; i++) {
      game.roll(pins);
    }
  }

  test('WHEN all rolls are 0 THEN score should be 0', () => {
    const game  = new Game();
    gameWithoutBonus(game, 0);
    const score = game.score;
    expect(score).toBe(0);
  });

  test('WHEN rolling a spare AND rolling 3 in the next roll THEN score should be 16', () => {
    const game  = new Game();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for(let i = 0; i <= 16; ++i) {
      game.roll(0);
    }
    const score = game.score;
    expect(score).toBe(16);
  });

  test('WHEN all rolls are 1 THEN score should be 20', () => {
    const game  = new Game();
    gameWithoutBonus(game, 1);
    const score = game.score;
    expect(score).toBe(20);
  });

  test('WHEN all rolls are 3 THEN score should be 60', () => {
    const game  = new Game();
    gameWithoutBonus(game, 3);
    const score = game.score;
    expect(score).toBe(60);
  });

  test('WHEN rolling a spare AND rolling 0 in the next roll THEN score should be 10', () => {
    const game  = new Game();
    game.roll(5);
    game.roll(5);
    for(let i = 0; i <= 17; ++i) {
      game.roll(0);
    }
    const score = game.score;
    expect(score).toBe(10);
  });

  test('WHEN rolling a spare AND rolling 0 in the next roll THEN score should be 10', () => {
    const game  = new Game();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(0);
    for(let i = 0; i <= 11; ++i) {
      game.roll(0);
    }
    const score = game.score;
    expect(score).toBe(32);
  });
});