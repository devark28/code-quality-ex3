/**
 * Count array nesting levels
 *
 * @template T
 * @param {T[]} array
 * @return {number}
 */
export function countArrayNestingLevels(array) {
  const nestedArrays = array.filter(ele => Array.isArray(ele));
  if(!nestedArrays.length) return 0;
  return 1 + countArrayNestingLevels(nestedArrays.flat());
}
