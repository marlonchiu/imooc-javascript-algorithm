/**
 * 933. 最近的请求次数
 * https://leetcode-cn.com/problems/number-of-recent-calls/
 *
 * 解题思路：
 *   1.有新请求就入队，3000ms前发出的请求出队
 *   2.队列的长度就是最近的请求次数
 */

var RecentCounter = function() {
  this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.q.push(t);
  // 如果队头不在 [t-3000, t] 范围内，就剔除
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }
  return this.q.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


// 时间复杂度 O(n) 、 空间复杂度 O(n)
