import {sum} from "../sum";

test("Calculates the sum of numbers array recursively", () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([0, 0, 0])).toBe(0);
  expect(sum([-1, -2, -3])).toBe(-6);
});
