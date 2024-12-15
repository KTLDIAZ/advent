/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  let reviewedShoes = []
  let response = []

  for (let index = 0; index < shoes.length; index++) {
    let currentShoe = shoes[index]
    let match = reviewedShoes.find(x => x.type !== currentShoe.type && x.size === currentShoe.size)
    if (!match) {
      reviewedShoes.push(currentShoe)
      continue
    }

    response.push(currentShoe.size)
    let matchIndex = reviewedShoes.indexOf(match)
    reviewedShoes.splice(matchIndex, 1)
  }

  return response
}