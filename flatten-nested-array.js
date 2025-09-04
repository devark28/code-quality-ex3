import {countArrayNestingLevels} from "./count-array-nesting-levels.js";

/**
 * Flatten nested arrays
 *
 * @template T
 * @param {T[]} array
 * @return {T[]}
 */
export function flattenNestedArray(array) {
  const levelsCount = countArrayNestingLevels(array);
  let resultingArray = array;
  for (let i = 0; i < levelsCount; i++) {
    resultingArray = resultingArray.flat();
  }
  return resultingArray;
}
