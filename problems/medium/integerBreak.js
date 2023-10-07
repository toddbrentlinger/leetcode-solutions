/**
 * @param {number} n
 * @return {number}
 * Runtime: 47ms (81.83%)
 * Memory: 41.9MB (46.60%)
 */
var integerBreak = function(n) {
    if (n < 4) { return n - 1; }

    // Should only have 0-2 2's and rest are 3's
    // If want to maximize 3's, find minimum 2's using modulus operator
    let nTwos;
    switch(n % 3) {
      case 1:
        nTwos = 2;
        break;
      case 2:
        nTwos = 1;
        break;
      default:
        nTwos = 0;
    }
    
    // Find remaining number of multiple of 3's
    let nThrees = (n - nTwos * 2) / 3;
    
    return 2**nTwos * 3**nThrees;
};

/**

N   Max   Sequence   No.3s   No.2s
1    0    0,1          0        0
2    1    1,1          0        0
3    2    1,2          0        1
4    4    2,2          0 |      2 |
5    6    2,3          1 |      1 |
6    9    3,3          2 V      0 V
7    12   2,2,3        1 |      2 |
8    18   2,3,3        2 |      1 |
9    27   3,3,3        3 V      0 V
10   36   2,2,3,3      2 |      2 |
11   54   2,3,3,3      3 |      1 |
12   81   3,3,3,3      4 V      0 V
13  108   2,2,3,3,3    3 |      2 |
14  162   2,3,3,3,3    4 |      1 |
15  243   3,3,3,3,3    5 V      0 V 

 */