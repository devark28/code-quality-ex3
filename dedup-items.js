/**
 * Deduplicate items of an array
 * @template T
 * @param {T[]} items
 * @return {T[]}
 */
export function dedupItems(items) {
  return [...new Set(items)];
}