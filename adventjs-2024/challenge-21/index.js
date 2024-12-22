/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
  if(tree === null)
  {
      return 0;
  }

  let leftHeigh = treeHeight(tree.left);
  let rightHeigh = treeHeight(tree.right);
      
  return Math.max(leftHeigh, rightHeigh) + 1;
}
