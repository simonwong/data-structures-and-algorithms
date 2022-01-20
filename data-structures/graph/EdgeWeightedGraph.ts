/* eslint-disable max-classes-per-file */
import {
  Edge as EdgeBase,
  EdgeWeightedGraph as EdgeWeightedGraphBase,
} from './interface'
import { LinkedList } from '../linked-list/LinkedList'

export class Edge implements EdgeBase {
  private _weight: number

  private v: number

  private w: number

  weight() {
    return this._weight
  }

  either() {
    return this.v
  }

  other(vertex: number) {
    if (vertex === this.v) {
      return this.w
    }
    if (vertex === this.w) {
      return this.v
    }
    throw Error()
  }

  constructor(v: number, w: number, weight: number) {
    this.v = v
    this.w = w
    this._weight = weight
  }

  compareTo(that: Edge) {
    if (this.weight() < that.weight()) {
      return -1
    }
    if (this.weight() > that.weight()) {
      return 1
    }
    return 0
  }
}

export class EdgeWeightedGraph implements EdgeWeightedGraphBase {
  private v: number

  private e: number

  private adjList: Array<LinkedList<Edge>>

  constructor(v: number) {
    this.v = v
    this.e = 0
    this.adjList = new Array(v)

    for (let i = 0; i < v; i++) {
      this.adjList[i] = new LinkedList<Edge>()
    }
  }

  V() {
    return this.v
  }

  E() {
    return this.e
  }

  addEdge(e: Edge) {
    const v = e.either()
    const w = e.other(v)
    this.adjList[v].push(e)
    this.adjList[w].push(e)
    this.e++
  }

  adj(v: number) {
    return this.adjList[v]
  }

  edges() {
    const edges = new LinkedList<Edge>()
    for (let v = 0; v < this.V(); v++) {
      for (const e of this.adjList[v]) {
        if (e.other(v) > v) {
          edges.push(e)
        }
      }
    }
    return edges
  }
}
