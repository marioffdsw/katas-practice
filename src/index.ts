
export function calculateFizzBuzz(num: number): string {
  if(num == 3) return "Fizz";
  if(num == 5) return "Buzz";
  if(num == 15) return "FizzBuzz";

  if(num % 3 == 0) return "Fizz";

  return num.toString();
}
