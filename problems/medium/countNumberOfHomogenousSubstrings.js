/**
 * @param {string} s
 * @return {number}
 * Runtime: 51ms (100.00%)
 * Memory: 45.23MB (91.11%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var countHomogenous = function(s) {
    const M = 10**9 + 7;
    let total = 0;
    let first = 0;
    let last = 1;

    while (first < s.length) {
      // Find next index with different character OR end of string to get length of substring with same character
      while (last < s.length && s[last] === s[first]) {
        last++;
      }

      // Add nth triangle number to total where n is length of substring with same character (difference in first and last indeces)
      total += (last - first) * (last - first + 1) / 2;

      // Set first index to last for next loop (next substring with same character)
      first = last;
    }

    return total % M;
};

/**
n sequence of characters has 1+2+...+(n-1)+n -> nth triangle number homogenous substrings

nth triangle number = n(n+1)/2

1 a -> 1
2 aa -> 3 = 2+1 a,a - aa
3 aaa -> 6 = 3+2+1 a,a,a - aa,aa - aaa
4 aaaa -> 10 = 4+3+2+1 a,a,a,a - aa,aa,aa - aaa,aaa - aaaa
5 aaaaa -> 15 = 5+4+3+2+1 a,a,a,a,a - aa,aa,aa,aa - aaa,aaa,aaa - aaaa,aaaa - aaaaa
 */