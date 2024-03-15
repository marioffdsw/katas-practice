import { calculateFizzBuzz } from '../src';

describe("GIVEN calculateFizBuzz", () => {
  test('GIVEN 1 SHOULD return "1"', () => {
    const result: string = calculateFizzBuzz(1);
    expect(result).toBe("1");
  });
});
