/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  let rowWithAsterik = box.find(x => x.includes("*"))
  if (!rowWithAsterik) return false

  if (!rowWithAsterik.startsWith("#") || !rowWithAsterik.endsWith("#"))
    return false

  let indexOfAsterik = box.indexOf(rowWithAsterik)
  return indexOfAsterik > 0 && indexOfAsterik < box.length -1
}