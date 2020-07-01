// 递归的实现方式
function bsearch(a, value) {
  return bsearchInternally(a, 0, value.length - 1, value)
}

function bsearchInternally (a, low, high, value) {
  if (low > high) {
    return -1
  }
  const mid = low + ((high - low) >> 1)

  if (a[mid] === value) {
    return mid
  } else if (a[mid] < value) {
    bsearchInternally(a, mid + 1, high, value)
  } else {
    bsearchInternally(a, low, mid - 1, value)
  }
}
