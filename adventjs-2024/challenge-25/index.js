/**
 * @param {string} newCode - The magical program to execute
 * @returns {number/**
* @param {string} code - The magical program to execute
* @returns {number} - The final value after executing the program
*/
function execute(code) {
 let result = 0

 function executeInternal(newCode) {
   for (let index = 0; index < newCode.length; index++) {
     const instruction = newCode.at(index)
     if (instruction === '>') {
       continue
     }
  
     if (instruction === '+') {
       result++
       continue
     }
  
     if (instruction === '-') {
       result--
       continue
     }
  
     if (instruction === '[' && result === 0) {
       index = newCode.indexOf(']', index) - 1
       continue
     } else if (instruction === '[') {
       let endTag = newCode.indexOf(']', index)
       let loop = newCode.substring(index + 1, endTag)
       while(true) {
        executeInternal(loop)
         if (result === 0) {
           break
         }
       }
       index = newCode.indexOf(']', index) - 1
     }
  
     if (instruction === '{' && result === 0) {
       index = newCode.indexOf('}', index) - 1
       continue
     }
   } 
 }
  executeInternal(code)

 return result
}