/**
 * @param {number[]} numbers - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  nums.sort((a, b) => a - b)
  const lastNumber = nums[nums.length - 1]
  const missingNumbers = []

  for (let index = 1; index < lastNumber; index++) {
    if (nums.indexOf(index) === -1) {
      missingNumbers.push(index)
    }
  }
  return missingNumbers
}