import {sum} from '../src/index';

describe("test that the test framework is in place", () => {
  test('test', () => {
    let result = sum(1, 2);
    expect(result).toBe(3);
  });
});