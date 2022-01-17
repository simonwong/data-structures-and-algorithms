export class Node<T> {
  val: T

  next: Node<T>

  constructor(val: T) {
    this.val = val
    this.next = null
  }
}
