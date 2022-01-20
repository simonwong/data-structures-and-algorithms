// 无向图
export interface Graph {
  /** vertex 顶点数 */
  V: () => number
  /** edge 边数 */
  E: () => number
  /** 向图中添加一条 v-w 的边 */
  addEdge: (v: number, w: number) => void
  /** adjacency 返回和 v 相邻的所有顶点 */
  adj: (v: number) => Iterable<number>
}

// 有向图
export interface Digraph extends Graph {
  /** 返回该图的反向图 */
  reverse: () => Digraph
}

// 加权边
export interface Edge {
  /** 边的权重 */
  weight: () => number
  /** 边两端一个顶点 */
  either: () => number
  /** 另一个顶点 */
  other: (v: number) => number
  /** 与另一条边比较 */
  compareTo: (that: Edge) => number
}

// 加权图
export interface EdgeWeightedGraph {
  /** vertex 顶点数 */
  V: () => number
  /** edge 边数 */
  E: () => number
  /** 图的所有边 */
  edges: () => Iterable<Edge>
  /** adjacency 返回和 v 相邻的所有边 */
  addEdge: (e: Edge) => void
  /** adjacency 返回和 v 相邻的所有边 */
  adj: (v: number) => Iterable<Edge>
}

// 加权有向边
export interface DirectedEdge {
  /** 边的权重 */
  weight: () => number
  /** 起时顶点 */
  from: () => number
  /** 目标顶点 */
  to: () => number
}

// 加权有向图
export interface EdgeWeightedDigraph {
  /** vertex 顶点数 */
  V: () => number
  /** edge 边数 */
  E: () => number
  /** 图的所有边 */
  edges: () => Iterable<DirectedEdge>
  /** adjacency 返回和 v 相邻的所有边 */
  addEdge: (e: DirectedEdge) => void
  /** adjacency 返回和 v 相邻的所有边 */
  adj: (v: number) => Iterable<DirectedEdge>
}
