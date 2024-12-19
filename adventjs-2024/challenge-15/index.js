// copilot code xd
/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  let headers = {}
  let response = ''

  for (const key in data[0]) {
    headers[key] = key.length
  }

  for (const row of data) {
    for (const key in row) {
      headers[key] = Math.max(headers[key], `${row[key]}`.length)
    }
  }

  for (let index = 0; index < data.length; index++) {
    const row = data[index]
    let line = '|'
    for (const key in row) {
      line += ` ${row[key]}${' '.repeat(headers[key] - `${row[key]}`.length)} |`
    }
    response += line + '\n'
  }

  let horizontalLine = ''
  for (const key in headers) {
    horizontalLine += '+-' + '-'.repeat(headers[key]) + '-'
  }

  horizontalLine += '+'
  
  let header = '| ' + Object.entries(headers)
          .map((header, key) => 
            String(header[0]).charAt(0).toUpperCase() + String(header[0]).slice(1) + ' '.repeat(Math.abs(header[0].length - header[1])))
          .join(' | ') + ' |'
  
  
  response = horizontalLine + '\n' + header + '\n' + horizontalLine + '\n' + response + horizontalLine

  return response
}