/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  function isBomb(x, y) {
    return grid[x] && grid[x][y] ? 1 : 0
  }

  function countDiagonalBombs(x, y) {
    return (
      isBomb(x - 1, y - 1) +
      isBomb(x + 1, y + 1) +
      isBomb(x + 1, y - 1) +
      isBomb(x - 1, y + 1)
    )
  }

  function countLinearBombs(x, y) {
    return (
      isBomb(x + 1, y) +
      isBomb(x, y + 1) +
      isBomb(x - 1, y) +
      isBomb(x, y - 1)
    )
  }

  return grid.map((row, x) =>
    row.map((_, y) => countLinearBombs(x, y) + countDiagonalBombs(x, y))
  )
}