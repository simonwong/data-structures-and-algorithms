import { Node } from './Node'

const defaultEquals = <T>(a: T, b: T) => a === b

export interface LinkedListBase<T> {
  /** Iterator */
  [Symbol.iterator](): IterableIterator<T>

  push: (el: T) => void
  getElementAt: (index: Number) => Node<T>
  removeAt: (index: Number) => T
  remove: (el: T) => T
  insert: (el: T, index: number) => void
  indexOf: (el: T) => number
}

export class LinkedList<T> implements LinkedListBase<T> {
  private head: Node<T>

  private count: number

  private equalsFn: (a: T, b: T) => boolean

  constructor(equalsFn = defaultEquals) {
    this.head = null
    this.count = 0
    this.equalsFn = equalsFn
  }

  /**
   * 向尾部添加一个节点
   * @param {*} val 节点数据
   */
  push(val: T) {
    const node = new Node(val)
    let current = this.head

    // 节点为空时
    if (current == null) {
      this.head = node
    } else {
      // 找到最后一个节点
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  /**
   * 根据下标查找节点
   * @param {*} index
   */
  getElementAt(index: number) {
    // 边界
    if (index >= 0 && index < this.count) {
      let current = this.head

      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }

      return current
    }
    return undefined
  }

  /**
   * 根据下标删除
   * @param {*} index 位置
   * @returns val
   */
  removeAt(index: number) {
    // 边界
    if (index >= 0 && index < this.count) {
      let current = this.head

      // index 为 0， 移除第一个
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--

      return current.val
    }
    return undefined
  }

  /**
   * 移除一个节点
   * @param {*} val
   */
  remove(val: T) {
    const index = this.indexOf(val)
    return this.removeAt(index)
  }

  /**
   * 插入一个节点
   * @param {*} data 节点数据
   */
  insert(val: T, index: number) {
    // 边界
    if (index >= 0 && index < this.count) {
      const node = new Node(val)

      // index 为 0
      if (index === 0) {
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        previous.next = node
        node.next = current
      }
      this.count++

      return true
    }
    return false
  }

  /**
   * 获取节点位置
   * @param {*} val
   */
  indexOf(val: T) {
    let current = this.head

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(val, current.val)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objectString = `${this.head.val}`
    let current = this.head.next

    for (let i = 1; i < this.count && current != null; i++) {
      objectString = `${objectString},${current.val}`
      current = current.next
    }

    return objectString
  }

  *[Symbol.iterator]() {
    let current = this.head
    while (current != null) {
      yield current.val
      current = current.next
    }
  }
}
