/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  let timeWorkedSplit = timeWorked.split(':')
  let totalTimeSplit  = totalTime.split(':')
  let seconds = 1000
  let minute = 1000 * 60
  let hour = minute * 60
  let times = [hour, minute, seconds]

  let real = 0, estimated = 0
  for (let index = 0; index < 3; index++) {
    real += timeWorkedSplit[index] * times[index]
    estimated += totalTimeSplit[index] * times[index]
  }

  const porcentage = (real / estimated) * 100
  return Math.round(porcentage) + '%';
}
  