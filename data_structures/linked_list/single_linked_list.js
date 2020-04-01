class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class SingleLinkedList {
  constructor () {
    this.head = null
    this.count = 0
  }

  /**
   * 向尾部插入一个节点
   * @param {*} element 节点数据
   */
  push (element) {
    const node = new Node(element)
    // 节点为空时
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
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


  // /**
  //  * 查找节点
  //  * @param {*} data 节点数据
  //  */
  // find (data) {
  //   let currentNode = this.head
  //   while (currentNode.data !== data) {
  //     currentNode = currentNode.next
  //   }
  //   return currentNode
  // }

  // /**
  //  * 插入一个节点
  //  * @param {*} data 节点数据
  //  */
  // insert (data) {
  //   if (this.head) {
  //     let currentNode = this.head
  //     while (currentNode.next) {
  //       currentNode = currentNode.next
  //     }
  //     currentNode.next = new LinkNode(data)
  //   } else {
  //     this.head = new LinkNode(data)
  //   }
  // }
}

const myLinked = new SingleLinkedList()
myLinked.push('aaa')
myLinked.push('ddd')
myLinked.push('ccc')

console.log(myLinked.getElementAt(1))
console.log(myLinked)
// console.log(myLinked);
