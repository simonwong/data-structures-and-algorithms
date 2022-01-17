/**
 * 当数据中有重复的值
 * @param {*} a
 * @param {*} value
 */
export function binarySearch(a, value) {
  let low = 0
  let high = a.length - 1

  while (low <= high) {
    const mid = low + ((high - low) >> 1)

    if (a[mid] > value) {
      high = mid - 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      if (mid === 0 || a[mid - 1] !== value) {
        return mid
      }
      high = mid - 1
    }
  }
  return -1
}

// function bsearch(a, value) {
//   let low = 0
//   let high = a.length - 1

//   while (low <= high) {
//     const mid = low + ((high - low) >> 1)

//     if (a[mid] >= value) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }

//   if (low < value.length && a[low] === value) {
//     return low
//   } else {
//     return -1
//   }
// }
