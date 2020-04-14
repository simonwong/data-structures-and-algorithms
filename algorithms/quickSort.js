/**
 * 快速排序
 *
 * 递推公式：
 * quickSort(p...r) = quickSort(p...q-1) + quickSort(q+1 ... r)
 * 终止条件：
 * p >= r
 */
function quickSort (a) {
  const length = a.length

  if (length <= 1) return

  quickSortC(a, 0, length - 1)
}

function quickSortC (a, p, r) {
  if (p >= r) return

  const q = partition(a, p, r)

  quickSortC(a, p, q - 1)
  quickSortC(a, q + 1, r)
}

/**
 * 分区函数
 */
function partition (a, p, r) {

}
