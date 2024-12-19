/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let index = 0
  let registers = {}

  while(index < instructions.length) {
    let [instruction, x, y] = instructions[index].split(" ")

    if (registers[x] === undefined) {
      registers[x] = 0
    } 

    if (instruction === 'MOV') {
      if (!isNaN(Number(x))) {
        registers[y] = x
      } else {
        registers[y] = registers[x]
      }
    } else if (instruction === 'INC') {
      registers[x]++
    } else if (instruction === 'DEC') {
      registers[x]--
    } else if (instruction === 'JMP' && registers[x] === 0) {
      index = Number(y)
      continue
    }

    index++
  }

  return registers['A']
}