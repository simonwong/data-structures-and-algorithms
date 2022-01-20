export class Queue<T> extends Array<T> {
  enqueue(v: T) {
    this.push(v)
  }

  dequeue() {
    return this.shift()
  }
}
