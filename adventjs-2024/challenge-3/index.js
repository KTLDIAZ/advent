/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  // Code here
  const newInventory = {}

  inventory.forEach((toy) => {
    if (!newInventory[toy.category]) {
      newInventory[toy.category] = {}
    }

    let currentQuantity = newInventory[toy.category][toy.name] || 0
    newInventory[toy.category][toy.name] = currentQuantity + toy.quantity
  })

  return newInventory
}