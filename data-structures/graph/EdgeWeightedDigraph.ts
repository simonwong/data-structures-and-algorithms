/* eslint-disable max-classes-per-file */
import { Stack } from 'data-structures/stack/Stack'
import {
  DirectedEdge as DirectedEdgeBase,
  EdgeWeightedDigraph as EdgeWeightedDigraphBase,
} from './interface'
import { LinkedList } from '../linked-list/LinkedList'

export class DirectedEdge implements DirectedEdgeBase {
  private _weight: number

  private v: number

  private w: number

  from() {
    return this.v
  }

  to() {
    return this.w
  }

  weight() {
    return this._weight
  }

  constructor(v: number, w: number, weight: number) {
    this.v = v
    this.w = w
    this._weight = weight
  }
}

export class EdgeWeightedDigraph implements EdgeWeightedDigraphBase {
  private v: number

  private e: number

  private adjList: Array<LinkedList<DirectedEdge>>

  constructor(v: number) {
    this.v = v
    this.e = 0
    this.adjList = new Array(v)

    for (let i = 0; i < v; i++) {
      this.adjList[i] = new LinkedList<DirectedEdge>()
    }
  }

  V() {
    return this.v
  }

  E() {
    return this.e
  }

  addEdge(e: DirectedEdge) {
    this.adjList[e.from()].push(e)
    this.e++
  }

  adj(v: number) {
    return this.adjList[v]
  }

  edges() {
    const edges = new LinkedList<DirectedEdge>()
    for (let v = 0; v < this.V(); v++) {
      for (const e of this.adjList[v]) {
        edges.push(e)
      }
    }
    return edges
  }
}

export class SP {
  _distTo: number[]

  _edgeTo: DirectedEdge[]

  // TODO:
  // constructor(g: EdgeWeightedDigraph, s: number) {
  //   const g
  // }

  /** 边的松弛 */
  private edgeRelax(e: DirectedEdge) {
    const v = e.from()
    const w = e.to()
    if (this._distTo[w] > this._distTo[v] + e.weight()) {
      this._distTo[w] = this._distTo[v] + e.weight()
      this._edgeTo[w] = e
    }
  }

  /** 顶点的松弛 */
  private vertexRelax(G: EdgeWeightedDigraph, v: number) {
    for (const e of G.adj(v)) {
      const w = e.to()

      if (this._distTo[w] > this._distTo[v] + e.weight()) {
        this._distTo[w] = this._distTo[v] + e.weight()
        this._edgeTo[w] = e
      }
    }
  }

  /** 从顶点 S 到顶点 V 的距离，如果不存在则无限大 */
  distTo(v: number) {
    return this._distTo[v]
  }

  /** 是否存在从顶点 S 到顶点 V 的路径 */
  hasPathTo(v: number) {
    return this._distTo[v] < Number.POSITIVE_INFINITY
  }

  /** 从顶点 S 到顶点 V 的路径 */
  pathTo(v: number) {
    if (!this.hasPathTo(v)) {
      return null
    }
    const path = new Stack<DirectedEdge>()

    for (let e = this._edgeTo[v]; e != null; e = this._edgeTo[e.from()]) {
      path.push(e)
    }
    return path
  }
}
