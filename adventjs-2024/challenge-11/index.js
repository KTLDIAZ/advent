/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  return filename.substring(filename.indexOf('_') + 1, filename.lastIndexOf('.'))
}