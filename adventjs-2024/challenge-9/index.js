/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let x,y
  for(let index = 0; index < board.length; index++) {
    if (board[index].includes('@')) {
      y = index
      x = board[index].indexOf('@')
      break
    }
  }

  const movement = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }

  const [dy, dx] = movement[mov]
  const nextY = y + dy
  const nextX = x + dx

  if (nextY < 0 || nextY >= board.length) {
    return 'crash'
  }

  const responseEnum = {
    'o': 'crash',
    '*': 'eat',
    default: 'none'
  }
  const nextTrainPosition = board[nextY].charAt(nextX);

  return responseEnum[nextTrainPosition] || responseEnum.default
}