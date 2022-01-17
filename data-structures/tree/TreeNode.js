class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const normalData = new TreeNode(5)
normalData.left = new TreeNode(2)
normalData.left.left = new TreeNode(4)
normalData.left.right = new TreeNode(6)
normalData.right = new TreeNode(3)
normalData.right.left = new TreeNode(9)
normalData.right.right = new TreeNode(10)

export const normalTree = normalData

//        5
//    2       3
//  4   6   9   10

const searchData = new TreeNode(4)
searchData.left = new TreeNode(2)
searchData.left.left = new TreeNode(1)
searchData.left.right = new TreeNode(3)
searchData.right = new TreeNode(6)
searchData.right.left = new TreeNode(5)
searchData.right.right = new TreeNode(7)

export const searchTree = searchData

//        4
//    2       6
//  1   3   5   7

export default TreeNode
