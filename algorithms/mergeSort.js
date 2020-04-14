function mergeSort (a) {
  const length = a.length
  if (length <= 1) return

  mergeSortC(a, 0, length - 1)
}

function mergeSortC (a, p ,r) {
  // 递归终止
  if (p >= r) return

  // FIXME: 取中间值 q
  const q = Math.floor((p + r) / 2)
  console.log(q)
  mergeSortC(a, p, q)
  mergeSortC(a, q + 1, r)

  // TODO: a[p ... q] 和 a[q+1 ... r] 合并为 a[p ... r]
  // merge(a[p-r], a[p...q], a[q+1 ... r])
  merge(a, p, q, r)
}


function merge (a, p, q, r) {
  let i = p,
    j = q + 1,
    k = 0,
    tmp = []

  while (i <= q && j <= r) {
    if (a[i] <= a[j]) {
      tmp[k++] = a[i++]
    } else {
      tmp[k++] = a[j++]
    }
  }

  // 判断哪个子数组中有剩余数据
  let start = i
  let end = q

  if (j <= r) {
    start = j
    end = r
  }

  // 剩余数据拷贝到临时数组
  while (start <= end) {
    tmp[k++] = a[start++]
  }

  // 将 tmp 数组拷贝回 a[p ... r]
  for (let i = 0; i < (r - p); i++) {
    a[p + i] = tmp[i]
  }
}

const arr = [2, 3, 1, 5, 2, 7]
mergeSort(arr)
