import {isPrime} from "../is-prime";

describe("Check if a number is prime", () => {
  test("Positive numbers", () => {
    expect(isPrime(1)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(14)).toBe(false);
  });

  test("Negative numbers", () => {
    expect(isPrime(-13)).toBe(true);
    expect(isPrime(-21)).toBe(false);
  });
});
