import Node from './node'

class DoubleNode extends Node {
  constructor (element) {
    super(element)

    this.prev = null
  }
}

export default DoubleNode
