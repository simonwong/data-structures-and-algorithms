/**
 * 当数据中有重复的值
 * @param {*} a
 * @param {*} value
 */
function bsearch(a, value) {
  let low = 0
  let high = a.length - 1


  while (low <= high) {
    const mid = low + ((high - low) >> 1)

    if (a[mid] >= value) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  if (low < value.length && a[low] === value) {
    return low
  } else {
    return -1
  }
}
