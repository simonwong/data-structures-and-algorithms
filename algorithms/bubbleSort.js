/**
 * 冒泡排序
 */
function bubbleSort (a) {
  const length = a.length

  if (length <= 1) return

  for (let i = 0; i < length; i++) {
    // 提前退出冒泡循环的标志位
    let flag = false

    // 每一次冒泡，都会把最大值排到末尾，不再参与排序，所以 length - i
    for (let j = 0; j < length - i - 1; j++) {
      // 交换位置
      if (a[j] > a[j + 1]) {
        const temp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = temp

        flag = true
      }
    }

    if (!flag) break
  }
}
