/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  //let regex = /([+]?-?[0-9]{1,3}){4,}?/g
  let regex = new RegExp(phone, 'g')
  let results = [...agenda.matchAll(regex)]
  if (results.length === 0 || results.length > 1) return null

  let agendaSplit = []
  let agendaLength = agenda.length
  let index = 0
  while (agenda.includes('\n')){
    index += agenda.indexOf('\n')
    agendaSplit.push({
      agenda: agenda.substring(0, index),
      index
    })
    agenda = agenda.substring(index + 1)
  }
  agendaSplit.push({
    agenda,
    index: agendaLength
  })

  let result = results[0]
  let match = agendaSplit.find((item) => result.index <= item.index)
  let name = match.agenda.match(/(?<=\<)(.*?)(?=\>)/g)[0]
  let address = match.agenda.match(/ [a-zA-Z0-9.-\s]*/g)[0].trim()
  console.log({name, address})

  return { name, address }
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explanation: No results

findInAgenda(agenda, '1')
// null
// Explanation: Too many results