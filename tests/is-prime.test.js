import { isPrime } from "../is-prime";

test("Check if a number is prime", () => {
  expect(isPrime(1)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(8)).toBe(false);
  expect(isPrime(14)).toBe(false);
});
