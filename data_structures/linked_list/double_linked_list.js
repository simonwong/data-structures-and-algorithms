import LinkedList from './linked_list'
import DoubleNode from './double_node'

class DoubleLinkedList extends LinkedList {
  constructor (equalsFn) {
    super(equalsFn)

    this.tail = null
  }

  /**
   * 插入一个节点
   * @param {*} data 节点数据
   */
  insert (element, index) {
    // 边界
    if (index >= 0 && index < this.count) {
      const node = new DoubleNode(element)
      let current = this.head

      // index 为 0
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      // 插入最后一项
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count ++

      return true
    }
    return false
  }

  push (element) {
    const node = new DoubleNode(element)
    let current = this.head

    if (current == null) {
      this.head = node
    } else {
      while (current != null) {
        current = current.next
      }
      element.prev = current
      current.next = element
    }

    this.count ++
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
        if (this.count === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }

      // 移除最后一位
      } else if (index === this.count) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count --

      return current.element
    }
    return undefined
  }
}
