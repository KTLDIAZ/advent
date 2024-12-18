/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  // Code here
  let race = ""
  for (let index = 1; index <= indices.length; index++) {
    let currentReinderPositon = indices[index -1] 
    
    let track = "~".repeat(length)
    if (currentReinderPositon < 0) {
      currentReinderPositon = length + currentReinderPositon
    } 
    if (currentReinderPositon > 0) {
      let leftSide = track.substring(0, currentReinderPositon)
      let rightSide = track.substring(currentReinderPositon + 1)
      track = leftSide  + "r" + rightSide
    }
    
    const isometricSpace = " ".repeat(indices.length - index)
    const lane = ` /${index}`

    let breakLine = index < indices.length ? "\n" : ""
    race += isometricSpace + track + lane + breakLine
  }

  return race
}