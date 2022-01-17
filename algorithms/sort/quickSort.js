/**
 * 快速排序
 *
 * 递推公式：
 * quickSort(p...r) = quickSort(p...q-1) + quickSort(q+1 ... r)
 * 终止条件：
 * p >= r
 */

const swap = (a, i, j) => {
  const temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

const partition = (a, l, r) => {
  const pivotIndex = (l + r) >> 1
  // 将 pivot 移动到末尾
  swap(a, pivotIndex, r)

  const pivot = a[r]
  let i = l
  for (let j = l; j < r; j++) {
    if (a[j] <= pivot) {
      swap(a, j, i)
      i++
    }
  }
  // 把 pivot 交换回去
  swap(a, r, i)
  return i
}

const quickSortCC = (a, l, r) => {
  if (l >= r) return
  const c = partition(a, l, r)
  quickSortCC(a, l, c - 1)
  quickSortCC(a, c + 1, r)
}

export const quickSort = a => {
  quickSortCC(a, 0, a.length - 1)
}
