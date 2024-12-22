/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  received.sort()
  expected.sort()
  let response = {
    missing: {},
    extra: {}
  }

  for (let index = 0; index < received.length; index++) {
    let current = received[index]
    let found = expected.find(x => x === current)
    if (found) {
     expected.splice(expected.indexOf(found), 1)
     continue
    }
    
    response.extra[current] = response.extra[current] + 1 || 1
  }

  for (let index = 0; index < expected.length; index++) {
    response.missing[expected[index]] = response.missing[expected[index]] + 1 || 1
  }

  return response
}