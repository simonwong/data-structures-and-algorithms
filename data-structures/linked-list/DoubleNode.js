import { Node } from './Node'

export class DoubleNode extends Node {
  constructor (element) {
    super(element)

    this.prev = null
  }
}
