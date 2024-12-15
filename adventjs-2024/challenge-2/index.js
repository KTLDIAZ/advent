/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Code here
  let longestName  = names.toSorted((a, b) => b.length - a.length)[0]
  let horizontalBorder = "*".repeat(longestName.length + 4)

  let response = horizontalBorder
  for (let index = 0; index < names.length; index++) {
    let currentName = names[index]
    response += `\n* ${currentName} ${" ".repeat(longestName.length - currentName.length)}*`
  }

  response += "\n" + horizontalBorder
  return response
}