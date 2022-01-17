/**
 * 插入排序
 */
export function insertionSort(a) {
  const { length } = a

  if (length <= 1) return

  // 右侧未排序区域
  for (let i = 1; i < length; i++) {
    const value = a[i]
    let j = i - 1

    // 左侧排序区域
    for (; j >= 0; j--) {
      // 向右侧移动
      if (a[j] > value) {
        a[j + 1] = a[j]
      } else {
        break
      }
    }

    // 移动完后，这个位置是空的，插入
    a[j + 1] = value
  }
}
