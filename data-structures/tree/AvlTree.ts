/**
 * AVL 树是带有平衡条件的二叉查找树
 */

export class AvlNode<T = any> {
  element: T

  left: AvlNode

  right: AvlNode

  _height: number

  readonly ALLOWED_IMBALANCE = 1

  constructor(val: T) {
    this.element = val
    this.left = null
    this.right = null
    this._height = 0
  }

  /**
   * 获取高度方法
   * 如果是 null 时，返回 -1
   * @param t
   * @returns
   */
  private height(t: AvlNode<T>): number {
    return t === null ? -1 : t._height
  }

  /**
   * 左单旋转
   * ======================================
   *       k2                k1
   *     /   \             /   \
   *   k1    [z]  ==>>   [x]    k2
   *  /  \                     /  \
   * [x] [y]                 [y]  [z]
   * ======================================
   * @param k2
   */
  private rotateWithLeftChild(k2: AvlNode<T>): AvlNode<T> {
    const k1 = k2.left
    k2.left = k1.right
    k1.right = k2
    // 重新计算左右树的高度
    k2._height = Math.max(this.height(k2.left), this.height(k2.right)) + 1
    k1._height = Math.max(this.height(k1.left), k2._height) + 1
    return k1
  }

  /**
   * 右单旋转
   * ======================================
   *      k2               k1
   *     /  \             /  \
   *   [z]   k1   ==>>   k2  [y]
   *        /  \        /  \
   *      [x]  [y]     [z] [x]
   * ======================================
   * @param k2
   */
  private rotateWithRightChild(k2: AvlNode<T>): AvlNode<T> {
    const k1 = k2.right
    k2.right = k1.left
    k1.left = k2
    // 重新计算左右树的高度
    k2._height = Math.max(this.height(k2.left), this.height(k2.right)) + 1
    k1._height = Math.max(this.height(k1.right), k2._height) + 1
    return k1
  }

  /**
   * 左双旋转
   * ======================================
   *       k3                k2
   *     /   \             /   \
   *   k1    [D]  ==>>   k1     k3
   *  /  \              /  \    /  \
   * [A]  k2          [A] [B]  [C] [D]
   *     /  \
   *    [B] [C]
   * ======================================
   * @param k3
   */
  private doubleWithLeftChild(k3: AvlNode<T>): AvlNode<T> {
    k3.left = this.rotateWithRightChild(k3.left)
    return this.rotateWithLeftChild(k3)
  }

  /**
   * 右双旋转
   */
  private doubleWithRightChild(k3: AvlNode<T>): AvlNode<T> {
    k3.right = this.rotateWithLeftChild(k3.right)
    return this.rotateWithRightChild(k3)
  }

  /**
   * 平衡
   * @param t
   * @returns
   */
  private balance(t: AvlNode<T>): AvlNode<T> {
    if (t === null) {
      return t
    }
    if (this.height(t.left) - this.height(t.right) > this.ALLOWED_IMBALANCE) {
      // 判断左树的子树高度差
      if (this.height(t.left.left) >= this.height(t.left.right)) {
        t = this.rotateWithLeftChild(t)
      } else {
        t = this.doubleWithLeftChild(t)
      }
    } else if (
      this.height(t.right) - this.height(t.left) >
      this.ALLOWED_IMBALANCE
    ) {
      // 判断右树的子树高度差
      if (this.height(t.right.right) >= this.height(t.right.left)) {
        t = this.rotateWithRightChild(t)
      } else {
        t = this.doubleWithRightChild(t)
      }
    }
    t._height = Math.max(this.height(t.left), this.height(t.right)) + 1
    return t
  }

  /**
   * 插入
   * @param x
   * @param t
   * @returns
   */
  private insert(x: T, t: AvlNode<T>): AvlNode<T> {
    if (t === null) {
      return new AvlNode(x)
    }

    // compareTo
    if (x < t.element) {
      t.left = this.insert(x, t.left)
    } else if (x > t.element) {
      t.right = this.insert(x, t.right)
    } else {
      /* Duplicate */
    }

    return this.balance(t)
  }

  private findMin(t: AvlNode<T>): AvlNode<T> {
    // TODO: findMin 逻辑补全
    return t
  }

  private remove(x: any, t: AvlNode<T>) {
    if (t === null) {
      return t
    }

    if (x < t.element) {
      t.left = this.remove(x, t.left)
    } else if (x > t.element) {
      t.right = this.remove(x, t.right)
    } else if (t.left != null && t.right != null) {
      t.element = this.findMin(t.right).element
      t.right = this.remove(t.element, t.right)
    } else {
      t = t.left !== null ? t.left : t.right
    }
    return this.balance(t)
  }
}
