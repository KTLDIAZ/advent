/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let index = 0
  while (index < s.length) {
    if (s[index] !== s[index + 1]) {
      index++
      continue
    }
    s = s.substring(0, index) + s.substring(index + 2)
    index = 0
  }

  return s
}