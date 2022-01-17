/* eslint-disable @typescript-eslint/no-unused-expressions */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

export const levelOrder = root => {
  if (!root) return null

  let checkArr = [root]
  /** @type {number[][]} */
  const result = []

  while (checkArr.length > 0) {
    const newCheckArr = []
    const resultItem = []

    for (let i = 0; i < checkArr.length; i++) {
      const item = checkArr[i]
      resultItem.push(item.val)

      item.left && newCheckArr.push(item.left)
      item.right && newCheckArr.push(item.right)
    }

    result.push(resultItem)
    checkArr = newCheckArr
  }
  return result
}
