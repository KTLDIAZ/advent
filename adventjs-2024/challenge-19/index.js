/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  let response = ''

  let weights = [10, 5, 2, 1]

  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  function getBoxes(quantity, currentWeight, boxRepresentation) {
    let box = currentWeight >= 5 ? 
        '\n' + boxRepresentation[1] + '\n' + boxRepresentation[2] :
        '\n' + boxRepresentation[1]
    
    return box.repeat(quantity)
  }

  let needsCeil = false
  let previousLength = 0
  for (let index = 0; index < weights.length; index++) {
    let currentWeightType = weights[index] 
    let mod = parseInt(weight / currentWeightType)
    let currentBox = boxRepresentations[currentWeightType]

    if (mod > 0) {  
      weight -= mod * currentWeightType
      let boxes = getBoxes(mod, currentWeightType, currentBox)
      let ceil = needsCeil ? '_'.repeat(previousLength - currentBox[1].length - 1).trim(): ''
      response =  boxes + ceil + response
      previousLength = currentBox[1].length
      needsCeil = true
    }

    if (weight === 0) {
      response = currentBox[0] + response
      break
    }
  }

  return response
}

distributeWeight(68)