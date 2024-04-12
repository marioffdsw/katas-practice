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

  test("WHEN rolling two spare " +
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

  test("WHEN rolling a strike " +
      "AND all subsequent rolls are 0 " +
      "THEN score should be 10", () => {
    const game = new Game();
    game.roll(10);
    for(let i = 1; i <= 18; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(10);
  });

  test("WHEN rolling a strike " +
      "AND next roll is a 3" +
      "AND all subsequent rolls are 0 " +
      "THEN score should be 16", () => {
    const game = new Game();
    game.roll(10);
    game.roll(3);
    for(let i = 1; i <= 17; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(16);
  });

  test("WHEN rolling a strike " +
      "AND next roll is a 3" +
      "AND all subsequent rolls are 0 " +
      "THEN score should be 16", () => {
    const game = new Game();
    game.roll(10);
    game.roll(3);
    for(let i = 1; i <= 17; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(16);
  });

  test("WHEN rolling a strike " +
      "AND next roll is a 3" +
      "AND next roll is a 3" +
      "AND all subsequent rolls are 0 " +
      "THEN score should be 22", () => {
    const game = new Game();
    game.roll(10);
    console.log("isStrike", game.isStrike)
    game.roll(3);
    console.log("isStrike", game.isStrike)
    game.roll(3);
    console.log("isStrike", game.isStrike)
    for(let i = 1; i <= 16; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(22);
  });

  // 10 - 10 - 3 - 4 = 37
  // 12 tiros de 10 = 300
  
  // Arrange
  // Act Componente
  // Assert
});