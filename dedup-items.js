/**
 * Deduplicate items of an array
 * @template T
 * @param {T[]} items
 * @return {T[]}
 */
export function dedupItems(items) {
  return items.filter((item, idx) => {
    return idx === items.findLastIndex(it => it === item);
  });
}
