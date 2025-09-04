/**
 * Check if a number is prime
 * @param {number} n
 */
export function isPrime(n) {
  const abs_n = Math.abs(n);
  const sign = n / abs_n;
  if (abs_n <= 2) return true;
  for (let i = 2; i <= abs_n / 2; i++) {
    const signed_i = i * sign;
    if (n % signed_i === 0) return false;
  }
  return true;
}
