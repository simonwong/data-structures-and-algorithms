// // 后序 -- 递归写法
// function postOrder(root) {
//   if (root == null) {
//     return
//   }

//   postOrder(root.left);
//   postOrder(root.right);
//   // TODO: 操作
//   console.log(root.val)
// }

// 后序 - 迭代写法
function postOrder(root) {
  const stack = []
  let prev = null

  while (root != null || stack.length > 0) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.right == null || root.right === prev) {
      // TODO: root.val
      console.log(root.val)
      prev = root
      root = null
    } else {
      stack.push(root)
      root = root.right
    }
  }
}

export default postOrder
