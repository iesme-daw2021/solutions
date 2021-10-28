/**
 * Exercise 1
 */
export function unique(arr) {
  return Array.from(new Set(arr));
}

/**
 * Exercise 2
 */
export function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());
}
