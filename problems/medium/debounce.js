/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 * Runtime: 43ms (98.14%)
 * Memory: 41.72MB (63.10%)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
var debounce = function(fn, t) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */