/* eslint-disable max-classes-per-file */
import { Queue } from 'data-structures/queue/Queue'
import { LinkedList } from '../linked-list/LinkedList'
import { Digraph as DigraphBase } from './interface'
import { Stack } from '../stack/Stack'

export class Digraph implements DigraphBase {
  private v: number

  private e: number

  private adjList: Array<LinkedList<number>>

  constructor(v: number) {
    this.v = v
    this.e = 0
    this.adjList = new Array(v)

    for (let i = 0; i < v; i++) {
      this.adjList[i] = new LinkedList<number>()
    }
  }

  V() {
    return this.v
  }

  E() {
    return this.e
  }

  addEdge(v: number, w: number) {
    this.adj[v].push(w)
    this.e++
  }

  adj(v: number) {
    return this.adjList[v]
  }

  reverse() {
    const reversedGraph = new Digraph(this.v)

    for (let v = 0; v < this.v; v++) {
      for (const w of this.adj(v)) {
        reversedGraph.addEdge(w, v)
      }
    }
    return reversedGraph
  }

  toString() {
    let s = `${this.V()} vertices, ${this.E()} edges`

    for (let v = 0; v < this.V(); v++) {
      s += `${v}: `
      for (const w of this.adj(v)) {
        s += `${w} `
      }
      s += `\n`
    }
    return s
  }
}

/**
 * 有向图深度优先搜索
 */
export class DigraphDFS {
  private marked: Array<boolean>

  constructor(graph: Digraph, start: number) {
    this.marked = new Array<boolean>(graph.V())
    this.dfs(graph, start)
  }

  private dfs(g: Digraph, v: number) {
    this.marked[v] = true
    for (const w of g.adj(v)) {
      if (!this.marked[w]) {
        this.dfs(g, w)
      }
    }
  }

  isMarked(v: number) {
    return this.marked[v]
  }
}

/**
 * 寻找有向环
 */
export class DirectedCycle {
  private marked: boolean[]

  private edgeTo: number[]

  // 有向环的所有顶点
  private cycle: Stack<number>

  // 递归调用栈上的所有顶点
  private onStack: boolean[]

  constructor(g: Digraph) {
    this.onStack = new Array(g.V())
    this.edgeTo = new Array(g.V())
    this.marked = new Array(g.V())

    for (let v = 0; v < g.V(); v++) {
      if (!this.marked[v]) {
        this.dfs(g, v)
      }
    }
  }

  private dfs(g: Digraph, v: number) {
    this.onStack[v] = true
    this.marked[v] = true

    for (const w of g.adj(v)) {
      if (this.hasCycle()) {
        return
      }
      if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(g, w)
      } else if (this.onStack[w]) {
        this.cycle = new Stack<number>()
        for (let x = v; x !== w; x = this.edgeTo[x]) {
          this.cycle.push(x)
        }
        this.cycle.push(w)
        this.cycle.push(v)
      }
    }
    this.marked[v] = false
  }

  hasCycle() {
    return this.cycle != null
  }
}

/**
 * 基于深度优先搜索的顶点排序
 */
export class DepthFirstOrder {
  private marked: boolean[]

  // 前序
  private pre: Queue<number>

  // 后序
  private post: Queue<number>

  // 逆后序
  private reversePost: Stack<number>

  constructor(g: Digraph) {
    this.marked = new Array(g.V())
    this.pre = new Queue()
    this.post = new Queue()
    this.reversePost = new Stack()
    for (let v = 0; v < g.V(); v++) {
      if (!this.marked[v]) {
        this.dfs(g, v)
      }
    }
  }

  private dfs(g: Digraph, v: number) {
    this.pre.enqueue(v)
    this.marked[v] = true

    for (const w of g.adj(v)) {
      if (!this.marked[v]) {
        this.dfs(g, w)
      }
    }
    this.post.enqueue(v)
    this.reversePost.push(v)
  }

  getPre() {
    return this.pre
  }

  getPost() {
    return this.post
  }

  getReversePost() {
    return this.reversePost
  }
}

/**
 * 拓扑排序
 */
export class Topological {
  private order: Iterable<number>

  constructor(g: Digraph) {
    const cycleFinder = new DirectedCycle(g)
    if (!cycleFinder.hasCycle()) {
      const dfs = new DepthFirstOrder(g)
      this.order = dfs.getReversePost()
    }
  }

  getOrder() {
    return this.order
  }
}
