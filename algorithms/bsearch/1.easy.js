/**
 * 最简单的二分查找，连续且不重复
 * @param {*} a
 * @param {*} value
 */
function bsearch(a, value) {
  let low = 0
  let high = a.length - 1


  while (low <= high) {

    // (l + h) / 2
    // l + (h - l) / 2
    // l + ((h - l) >> 1) 由于是位运算，可以不用 Math.floor
    const mid = low + ((high - low) >> 1)

    if (a[mid] === value) {
      return mid
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}
