/**
 * 20.有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 *
 * 解题思路：
 *   1.新建一个栈
 *   2.扫描字符串，遇到左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，
 *     类型不匹配则直接判定为不合法。
 *   3.最后栈空了就合法，否则不合法。
 *
 *   4.性能优化 先判断字符串长度是不是奇数
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {

  if (s.length % 2 === 1) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === '(' && c === ')') ||
        (t === '[' && c === ']') ||
        (t === '{' && c === '}')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};


// 时间复杂度 O(n) 、 空间复杂度 O(n)
