// 完全背包问题


// 322. 零钱兑换
// https://leetcode-cn.com/problems/coin-change/

import java.util.Arrays;
import java.util.HashMap;

// 状态转移方程

// dp(n) = {
//   0, n = 0
//   -1, n < 0
//   min{ dp(n - coin) + 1 | coin ⍷ conins  }, n > 0
// }

/**
 * dp table 迭代（自下而上）
 */
class Solution {
  public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);

    dp[0] = 0;

    for (int i = 1; i < dp.length; i++) {
      for (int coin : coins) {
        if (i - coin < 0) {
          continue;
        }
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
    return (dp[amount] == amount + 1) ? -1 : dp[amount];
  }
}

/**
 * 带备忘录的递归（自上而下）
 */
class SolutionDpWidthMemo {
  public int coinChange(int[] coins, int amount) {
    HashMap<Integer, Integer> memo = new HashMap<>();
    return dp(coins, amount, memo);
  }

  int dp (int[] coins, int amount, HashMap<Integer, Integer> memo) {
    // base case
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }

    if (memo.get(amount) != null) {
      return memo.get(amount);
    }

    int res = Integer.MAX_VALUE;
    for (int i = 0; i < coins.length; i++) {
      int subProblem = dp(coins, amount - coins[i], memo);
      if (subProblem == -1) {
        continue;
      }
      res = Math.min(res, subProblem + 1);
    }

    if (res == Integer.MAX_VALUE) {
      memo.put(amount, -1);
      return -1;
    }
    memo.put(amount, res);

    return res;
  }
}

/**
 * 暴力遍历
 */
class SolutionDp {
  public int coinChange(int[] coins, int amount) {
    if (amount == 0) {
      return 0;
    }
    return getMinCoinNumber(coins, amount, 0);
  }

  int getMinCoinNumber (int[] coins, int amount, int num) {
    int res = Integer.MAX_VALUE;
    int nothingNum = 0;

    for (int i = 0; i < coins.length; i++) {
      int nextAmount = amount - coins[i];

      if (nextAmount == 0) {
        res = Math.min(res, num + 1);
      } else if (nextAmount < 0) {
        // -1
        nothingNum += 1;
      } else {
        res = Math.min(res, getMinCoinNumber(coins, nextAmount, num + 1));
      }
    }
    if (nothingNum == coins.length) {
      return -1;
    }
    return res;
  }
}
