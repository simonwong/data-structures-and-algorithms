// 中序 -- 递归写法
// function inOrder(root) {
//   if (root == null) {
//     return
//   }

//   inOrder(root.left);
//   // TODO: 操作
//   console.log(root.val)
//   inOrder(root.right);
// }

// 中序 - 迭代写法
function inOrder(root) {
  const stack = []
  let cur = root

  while (cur != null || stack.length > 0) {
    while (cur != null) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    // TODO: 操作
    console.log(cur.val)
    cur = cur.right
  }
}

export default inOrder
