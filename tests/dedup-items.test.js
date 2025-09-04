import {dedupItems} from "../dedup-items";

describe("Deduplicate items of an array", () => {
  test("Numbers", () => {
    expect(dedupItems([1, 1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(dedupItems([5, 5, 5, 5])).toEqual([5]);
    expect(dedupItems([10, 20, 30])).toEqual([10, 20, 30]);
  });

  test("Objects", () => {
    const a = {id: 1};
    const b = {id: 2};
    const c = {id: 1};

    expect(dedupItems([a, a, b])).toEqual([a, b]);
    expect(dedupItems([a, b, b])).toEqual([a, b]);
    expect(dedupItems([a, c])).toEqual([a, c]);
  });

  test("Strings", () => {
    expect(dedupItems(["apple", "apple", "banana"])).toEqual(["apple", "banana"]);
    expect(dedupItems(["x", "y", "x", "z", "y"]))
      .toEqual(expect.arrayContaining(["x", "y", "z"]));
    expect(dedupItems(["hello"])).toEqual(["hello"]);
  });
});
