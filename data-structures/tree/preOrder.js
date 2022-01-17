// 前序 -- 递归写法
function preOrder(root) {
  if (root == null) {
    return
  }

  // TODO: 操作
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}

// 前序 - 迭代写法
// function preOrder(root) {
//   const stack = []
//   let cur = root

//   while (cur != null || stack.length > 0) {
//     while (cur != null) {
//       // TODO: 操作
//       console.log(cur.val)
//       stack.push(cur)
//       cur = cur.left
//     }
//     cur = stack.pop()
//     cur = cur.right
//   }
// }

export default preOrder
