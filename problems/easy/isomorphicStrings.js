/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 59ms (73.62%)
 * Memory: 43.87MB (32.17%)
 */
var isIsomorphic = function(s, t) {
    let sHash = {}, tHash = {};

    for (let i = 0; i < s.length; i++) {
        if (sHash[s[i]]) {
            if (sHash[s[i]] !== t[i]) {
                return false;
            }
        } else {
            sHash[s[i]] = t[i];
        }

        if (tHash[t[i]]) {
            if (tHash[t[i]] !== s[i]) {
                return false;
            }
        } else {
            tHash[t[i]] = s[i];
        }
    }

    return true;
};