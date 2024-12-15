/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {  
  while(packages.includes("(")) {
    let indexOpen = packages.lastIndexOf("(")
    let indexClose = packages.indexOf(")", indexOpen)

    let inner = packages.slice(indexOpen + 1, indexClose).split("").reverse().join("")
    packages = packages.slice(0, indexOpen) + inner + packages.slice(indexClose + 1)
  }

  return packages
}