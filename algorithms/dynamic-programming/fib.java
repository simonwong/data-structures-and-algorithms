import java.util.ArrayList;
import java.util.HashMap;

// 509. 斐波那契数
// https://leetcode-cn.com/problems/fibonacci-number/

/**
 * 状态压缩，因为每次只用到了 dp table 的最后两个
 */
class Solution {
  public int fib(int N) {
    if (N == 0) return 0;
    if (N == 1 || N == 2) return 1;

    int prev = 1;
    int curr = 1;

    for (int i = 3; i <= N; i++) {
      int sum = prev + curr;
      prev = curr;
      curr = sum;
    }
    return curr;
  }
}

/**
 * 使用 dp table 存储
 */
class SolutionWithDpTable {
  public int fib(int N) {
    ArrayList<Integer> dp = new ArrayList<>(N + 1);

    dp.add(0);
    dp.add(1);
    dp.add(1);

    for (int i = 3; i <= N; i++) {
      dp.add(dp.get(i - 1) + dp.get(i - 2));
    }
    return dp.get(N);
  }
}
/*
 * 借助 哈希表 存储结果
 */
class SolutionWithHashMap {
  public int fib(int N) {
    if (N < 1) {
      return 0;
    }

    HashMap<Integer, Integer> memo = new HashMap<>();

    return helper(memo, N);
  }

  int helper (HashMap<Integer, Integer> memo, int N) {
    if (N == 0) {
      return 0;
    }
    if (N == 1 || N == 2) {
      return 1;
    }

    if (memo.get(N) != null) {
      return memo.get(N);
    }
    memo.put(N, helper(memo, N - 1) + helper(memo, N - 2));
    return memo.get(N);
  }
}
