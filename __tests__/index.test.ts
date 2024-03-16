import { calculateFizzBuzz } from '../src';

describe("GIVEN calculateFizBuzz", () => {
  test('GIVEN 1 SHOULD return "1"', () => {
    const result: string = calculateFizzBuzz(1);
    expect(result).toBe("1");
  });
  test('GIVEN 2 SHOULD return "2"', () => {
    const result: string = calculateFizzBuzz(2);
    expect(result).toBe("2");
  });
  test('GIVEN 3 SHOULD return "Fizz"', () => {
    const result: string = calculateFizzBuzz(3);
    expect(result).toBe("Fizz");
  });
  test('GIVEN 5 SHOULD return "Buzz"', () => {
    const result: string = calculateFizzBuzz(5);
    expect(result).toBe("Buzz");
  });
  test('GIVEN 15 SHOULD return "FizzBuzz"', () => {
    const result: string = calculateFizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  test('GIVEN 6 SHOULD return "Fizz"', () => {
    const result: string = calculateFizzBuzz(6);
    expect(result).toBe("Fizz");
  });
  test('GIVEN 10 SHOULD return "Buzz"', () => {
    const result: string = calculateFizzBuzz(10);
    expect(result).toBe("Buzz");
  });
  test('GIVEN 30 SHOULD return "FizzBuzz"', () => {
    const result: string = calculateFizzBuzz(30);
    expect(result).toBe("FizzBuzz");
  });
  test('GIVEN 0 SHOULD throw an "Invalid Value" Errors', () => {
    expect(() => { calculateFizzBuzz(0) })
        .toThrow(new Error('Invalid Value'));
  });
  test('GIVEN 101 SHOULD throw an "Invalid Value" Errors', () => {
    expect(() => { calculateFizzBuzz(101) })
        .toThrow(new Error('Invalid Value'));
  });
});
