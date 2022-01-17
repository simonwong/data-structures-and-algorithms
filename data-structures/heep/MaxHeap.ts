export interface MaxHeapType {
  /**
   * 存储数据的数组（完全二叉树）
   */
  data: number[]

  /**
   * 数据存在 data 的 [1..N] 中，并不使用 data[0]
   */
  N: number

  /**
   * 向堆插入一个元素
   */
  insert(v: number): void

  /**
   * 删除堆的最大元素（堆顶）
   */
  delMax(v: number): number

  /**
   * 返回堆中最大元素
   */
  max(): void

  /**
   * 返回堆是否为空
   */
  isEmpty(): boolean

  /**
   * 返回堆的元素个数
   */
  size(): number
}

export class MaxHeap implements MaxHeapType {
  data: number[]

  N: number

  constructor(a: number[] = []) {
    this.data = []
    this.N = a.length

    let i = 1
    for (const n of a) {
      this.data[i++] = n
    }
    this.buildHeap()
  }

  insert(v: number) {
    this.data[++this.N] = v
    this.swim(this.N)
  }

  delMax(): number {
    if (this.isEmpty()) {
      return null
    }
    const max = this.data[1]
    this.swap(1, this.N--)
    // 防止对象游离（避免保存一个不需要的对象引用，一些算法书的示例代码就没有这么做）
    this.data[this.N + 1] = null
    this.sink(1)
    return max
  }

  max() {
    return this.data[1]
  }

  isEmpty() {
    return this.N === 0
  }

  size() {
    return this.N
  }

  // 构建堆（堆化）
  private buildHeap() {
    for (let i = this.N >> 1; i > 0; i--) {
      this.sink(i)
    }
  }

  private less(i: number, j: number) {
    return this.data[i] - this.data[j] < 0
  }

  private swap(i: number, j: number): void {
    const t = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = t
  }

  private swim(k: number) {
    while (k > 1 && this.less(k >> 1, k)) {
      this.swap(k >> 1, k)
      k >>= 1
    }
  }

  private sink(k: number) {
    while (2 * k <= this.N) {
      let j = 2 * k
      if (j < this.N && this.less(j, j + 1)) {
        j++
      }
      if (!this.less(k, j)) {
        break
      }
      this.swap(k, j)
      k = j
    }
  }
}

// test case (LOL)
// const asd = new MaxHeap([4, 5, 6, 3])
// console.log(`asd.isEmpty()`, asd.isEmpty())
// console.log(`asd.size()`, asd.size())
// console.log(`asd`, asd, [6, 5, 4, 3])
// console.log('=====')
// console.log(`asd.insert(7)`, asd.insert(7))
// console.log(`asd`, asd, [7, 6, 4, 3, 5])
// console.log(`asd.max()`, asd.max(), 7)
// console.log(`asd.delMax()`, asd.delMax(), 7)
// console.log(`asd.delMax()`, asd.delMax(), 6)
// console.log(`asd.delMax()`, asd.delMax(), 5)
// console.log(`asd.delMax()`, asd.delMax(), 4)
// console.log(`asd.delMax()`, asd.delMax(), 3)
// console.log(`asd.delMax()`, asd.delMax(), null)
// console.log(`asd`, asd, [])
// console.log('=====')
// console.log(`asd.insert(7)`, asd.insert(7))
// console.log(`asd`, asd, [7])
// console.log(`asd.insert(12)`, asd.insert(12))
// console.log(`asd`, asd, [12, 7])
// console.log(`asd.delMax()`, asd.delMax(), 12)
// console.log(`asd`, asd, [7])
