/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const validChars = /^[*o^#@]+$/g
  if (ornaments.match(validChars) === null) {
    return undefined
  }

  const prices = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }
  let sum = 0

  for (let index = 0; index < ornaments.length; index++) {
    const currentOrnament = Number(prices[ornaments[index]])
    const nextOrnament = Number(prices[ornaments[index + 1]])

    sum += currentOrnament < nextOrnament  ? -currentOrnament : currentOrnament
  }

  return sum
}

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z is unknown) 