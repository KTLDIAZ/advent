/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  /* Code here */
  let tree = ""
  let ornamentQuantity = 1
  
  for (let index = 1; index <= height; index++) {
    let sideSpaces = "_".repeat(height - index)
    
    tree += sideSpaces + ornament.repeat(ornamentQuantity) + sideSpaces + "\n"

    ornamentQuantity += 2
  }

  let baseSideSpace = "_".repeat(height - 1)
  let base = baseSideSpace + "#" + baseSideSpace

  tree += base + "\n" + base
  return tree
}