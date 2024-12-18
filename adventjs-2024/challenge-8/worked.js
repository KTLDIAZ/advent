/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  // Code here
  let race = ""
  for (let index = 1; index <= indices.length; index++) {
    let currentReinderPosition = indices[index -1]
    if (currentReinderPosition < 0) {
      currentReinderPosition = length + currentReinderPosition 
    }

    let track = ""
    if (currentReinderPosition === 0) {
      track = "~".repeat(length)
    } else {
      for (let trackIndex = 0; trackIndex < length; trackIndex++) {
        if (currentReinderPosition === trackIndex) {
          track += "r"
          continue
        }

        track += "~"
      }
    }

    const leftFormat = " ".repeat(indices.length - index)
    const lane = ` /${index}`

    let breakLine = index < indices.length ? "\n" : ""
    race += leftFormat + track + lane + breakLine
  }

  return race
}