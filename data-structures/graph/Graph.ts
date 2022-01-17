/* eslint-disable max-classes-per-file */
import { LinkedList } from '../linked-list/LinkedList'

export interface Graph {
  /** vertex 顶点数 */
  V: () => number
  /** edge 边数 */
  E: () => number
  /** 向图中添加一条 v-w 的边 */
  addEdge: (v: number, w: number) => void
  /** adjacency 返回和 v 相邻的所有顶点 */
  adj: (v: number) => Iterable<number>
  /** 对象的字符串表示 */
  toSting: () => string
}

export class UndiGraph implements Graph {
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
    this.adj[w].push(v)
    this.e++
  }

  adj(v: number) {
    return this.adjList[v]
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

  // /** 计算 v 的度数 */
  // public degree(G: Graph, v: number) {
  //   let degree = 0

  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   for (const w of G.adj(v)) {
  //     degree++
  //   }
  //   return degree
  // }

  // /** 计算所有顶点的最大度数 */
  // public maxDegree(G: Graph) {
  //   let max = 0

  //   for (let v = 0; v < G.V(); v++) {
  //     const degree = this.degree(G, v)
  //     if (degree > max) {
  //       max = degree
  //     }
  //   }
  //   return max
  // }

  // /** 计算所有顶点的平均度数 */
  // public avgDegree(G: Graph) {
  //   return (2 * G.E()) / G.E()
  // }

  // /** 计算自环的个数 */
  // public numberOfSelfLoops(G: Graph) {
  //   let count = 0
  //   for (let v = 0; v < G.V(); v++) {
  //     for (const w of G.adj(v)) {
  //       if (v == w) {
  //         count++
  //       }
  //     }
  //   }
  //   return count / 2
  // }
}

export class DepthFirstSearch {
  private marked: Array<boolean>

  constructor(graph: Graph, start: number) {
    this.marked = new Array<boolean>(graph.V())
    this.dfs(graph, start)
  }

  private dfs(g: Graph, v: number) {
    this.marked[v] = true
    for (const w of g.adj(v)) {
      if (!this.marked[w]) {
        this.dfs(g, w)
      }
    }
  }
}

export class DepthFirstPaths {
  private marked: Array<boolean>

  // 从起点到一个顶点的已知路径上的最后一个顶点
  // edgeTo[w] = v 表示 v-w 是第一次访问 w 时经过的边
  private edgeTo: Array<number>

  private start: number

  constructor(graph: Graph, start: number) {
    this.marked = new Array<boolean>(graph.V())
    this.edgeTo = new Array<number>(graph.V())
    this.start = start
    this.dfs(graph, start)
  }

  private dfs(g: Graph, v: number) {
    this.marked[v] = true
    for (const w of g.adj(v)) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(g, w)
      }
    }
  }

  public hasPathTo(v: number) {
    return this.marked[v]
  }

  public pathTo(v: number) {
    if (!this.hasPathTo(v)) {
      return null
    }
    const stackPath = []

    for (let i = v; i !== this.start; i = this.edgeTo[i]) {
      stackPath.unshift(i)
    }
    stackPath.unshift(this.start)

    return stackPath
  }
}

export class BreadthFirstPath {
  private marked: Array<boolean>

  // 从起点到一个顶点的已知路径上的最后一个顶点
  // edgeTo[w] = v 表示 v-w 是第一次访问 w 时经过的边
  private edgeTo: Array<number>

  private start: number

  constructor(graph: Graph, start: number) {
    this.marked = new Array<boolean>(graph.V())
    this.edgeTo = new Array<number>(graph.V())
    this.start = start
    this.bfs(graph, start)
  }

  private bfs(g: Graph, v: number) {
    const queue = []
    this.marked[v] = true
    queue.push(v)

    while (queue.length > 0) {
      const curV = queue.shift()

      for (const w of g.adj(curV)) {
        if (!this.marked[w]) {
          // 保存最短路径的最后一条边
          this.edgeTo[w] = curV
          this.marked[w] = true
          queue.push(w)
        }
      }
    }
  }
  // hasPathTo
  // pathTo 同 DepthFirstPaths
}
