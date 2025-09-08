/**
 * Check if a number is prime
 * @param {number} num
 */
export function isPrime(num) {
  if (num <= 2) return true;
  for (let divisor = 2; divisor <= num / 2; divisor++) {
    if (num % divisor === 0) return false;
  }
  return true;
}
