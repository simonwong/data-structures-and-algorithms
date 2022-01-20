export class Stack<T> extends Array<T> {
  push(...items: T[]): number {
    for (const v of items) {
      this.unshift(v)
    }
    return this.length
  }
}
