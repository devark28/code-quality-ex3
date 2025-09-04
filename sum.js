/**
 * Calculates the sum of a given numbers array recursively
 *
 * @param {number[]} numbers
 * @param {number} idx
 * @return {number}
 */
export function sum(numbers, idx = numbers.length - 1) {
  if (idx === -1) return 0;
  return numbers[idx] + sum(numbers, idx - 1);
}
