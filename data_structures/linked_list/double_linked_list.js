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

  }

  getElementAt (index) {

  }

  remove (element) {

  }

  removeAt (index) {

  }
}

const doubleLinked = new DoubleLinkedList()

doubleLinked.push('asd')
doubleLinked.push('asdddd')
console.log(doubleLinked)
