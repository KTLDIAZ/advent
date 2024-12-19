/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  let moves = 0;
  for (let i = 0; i < reindeer.length; i++) {
    moves += Math.abs(reindeer[i] - stables[i]);
  }

  return moves;
}