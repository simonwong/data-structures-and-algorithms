/**
 * 归并排序
 */

const merge = (arr, l, c, r) => {
  let i = l
  let j = c + 1
  const res = []

  while (i <= c && j <= r) {
    if (arr[i] <= arr[j]) {
      res.push(arr[i++])
    } else {
      res.push(arr[j++])
    }
  }
  while (i <= c) {
    res.push(arr[i++])
  }
  while (j <= r) {
    res.push(arr[j++])
  }

  for (let i = 0; i < res.length; i++) {
    arr[l + i] = res[i]
  }
}
const recursionMergeSort = (arr, l, r) => {
  if (l >= r) return

  const c = (l + r) >> 1

  recursionMergeSort(arr, l, c)
  recursionMergeSort(arr, c + 1, r)

  merge(arr, l, c, r)
}
export const mergeSort = arr => {
  recursionMergeSort(arr, 0, arr.length - 1)
  return arr
}
