import Node from './node'
import { defaultEquals } from '../utils'

class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.head = null
    this.count = 0
    this.equalsFn = equalsFn
  }

  /**
   * 向尾部添加一个节点
   * @param {*} element 节点数据
   */
  push (element) {
    const node = new Node(element)
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
    this.count ++
  }

  /**
   * 根据下标查找节点
   * @param {*} index
   */
  getElementAt (index) {
    // 边界
    if (index >= 0 && index < this.count) {
      let current = this.head

      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }

      return current.element
    }
    return undefined
  }
  /**
   * 根据下标删除
   * @param {*} index 位置
   * @returns element
   */
  removeAt (index) {
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
      this.count --

      return current.element
    }
    return undefined
  }

  /**
   * 移除一个节点
   * @param {*} element
   */
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  /**
   * 插入一个节点
   * @param {*} data 节点数据
   */
  insert (element, index) {
    // 边界
    if (index >= 0 && index < this.count) {
      const node = new Node(element)

      // index 为 0
      if (index === 0) {
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        previous.next = node
        node.next = current
      }
      this.count ++

      return true
    }
    return false
  }

  /**
   * 获取节点位置
   * @param {*} element
   */
  indexOf (element) {
    let index = 0
    let current = this.head

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

  getHead () {
    return this.head
  }

  toString () {
    if (this.head == null) {
      return ''
    }
    let objectString = `${this.head.element}`
    let current = this.head.next

    for (let i = 1; i < this.count && current != null; i++) {
      objectString = `${objectString},${current.element}`
      current = current.next
    }

    return objectString
  }
}

export default LinkedList
