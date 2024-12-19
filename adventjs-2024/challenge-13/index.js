/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let x = 0, y = 0
  let movements = ''
  let isDouble = false
  let isInverted = false
  const invertedMoves = {
    'R': 'L',
    'L': 'R',
    'U': 'D',
    'D': 'U'
  }

  function movement(move, currentValue, multiplier) {
    if (isInverted) {
      movements += invertedMoves[move]
      isInverted = false
      return currentValue - (1 * multiplier)
    }

    if (isDouble) {
      currentValue += 2 * multiplier
      isDouble = false
    } else {
      currentValue += 1 * multiplier
    }

    movements += move
    return currentValue
  }

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === '*') {
      isDouble = true
      continue
    }

    if (moves[i] === '!') {
      isInverted = true
      continue
    }

    if (moves[i] === '?' && movements.includes(moves[i + 1])) {
      i++
      continue
    }

    if (moves[i] === 'R') {
      x = movement('R', x, 1)
    }

    if (moves[i] === 'L') {
      x = movement('L', x, -1)
    }

    if (moves[i] === 'U') {
      y = movement('U', y, 1)
    }

    if (moves[i] === 'D') {
      y = movement('D', y, -1)
    }

  }

  return x === 0 && y === 0 ? true : [x, y]
}

console.log(isRobotBack('R'))   // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Step-by-step examples:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> moves to the right 
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done