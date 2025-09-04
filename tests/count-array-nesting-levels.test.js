import {countArrayNestingLevels} from "../count-array-nesting-levels";

describe("Count array nesting levels", () => {
  test("Returns 0 for a flat array", () => {
    expect(countArrayNestingLevels([1, 2, 3])).toBe(0);
  });

  test("Returns 1 for one level of nesting", () => {
    expect(countArrayNestingLevels([1, [2, 3]])).toBe(1);
  });

  test("Returns correct depth for deeply nested arrays", () => {
    expect(countArrayNestingLevels([1, [2, [3, [4]]]])).toBe(3);
  });
});
