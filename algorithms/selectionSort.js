/**
 * 选择排序
 */
function selectionSort (a) {
  const length = a.length

  if (length <= 1) return

  for (let i = 0; i < a.length; i++) {
    // 遍历右侧未排序组，找到最小值
    let minimumValue = null
    let minimumIndex = null
    for (let j = i; j < a.length; j++) {
      const value = a[j]

      if (!minimumValue || minimumValue > value) {
        minimumValue = value
        minimumIndex = j
      }
    }

    // 交换位置
    a[minimumIndex] = a[i]
    a[i] = minimumValue

    minimumValue = null
    minimumIndex = null
  }
}
