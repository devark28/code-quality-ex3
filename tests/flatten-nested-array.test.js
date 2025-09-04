import {flattenNestedArray} from "../flatten-nested-array";

describe("Flatten nested arrays", () => {
  test("Flattens a single level nested array", () => {
    expect(flattenNestedArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test("Flattens multiple nested levels", () => {
    expect(flattenNestedArray([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("Does nothing to an already flat array", () => {
    expect(flattenNestedArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
