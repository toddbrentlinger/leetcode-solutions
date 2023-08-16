/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let isRemainder = false;
    let result = [];
    
    // While still binary digits left in either binary
    while (aIndex > -1 || bIndex > -1) {
        // Sum of binary digit at each index plus one if there was a remainder from previous loop
        switch((aIndex >= 0 ? +a[aIndex] : 0) + (bIndex >= 0 ? +b[bIndex] : 0) + (isRemainder ? 1 : 0)) {
            case 3:
                result.push(1);
                isRemainder = true;
                break;
            case 2:
                result.push(0);
                isRemainder = true;
                break;
            case 1:
                result.push(1);
                isRemainder = false;
                break;
            case 0:
            default:
                result.push(0);
                isRemainder = false;
        }

        // Decrement indices if necessary
        if (aIndex > -1) {
            aIndex--;
        }
        if (bIndex > -1) {
            bIndex--;
        }
    }

    // If isRemainder is still true, add '1' to end
    if (isRemainder) {
        result.push(1);
    }
    
    // Reverse array of digits to get proper order and convert to string
    return result.reverse().join('');

    /*
    a=11 b=1
    
    ia=1 ib=0 r=false
    both 1, set to zero and set remainder to true
    res=0 r=true
    decrement ia but NOT ib since it reached zero

    ia=0 ib=0 r=1
    a is 1, r is 1, and b is zero, set to zero and remainder to true
    res=00 r=true
    finish decrementing since both indices reached zero

    remainder is true, add 1
    res=100

    11+11=110

    ia=1 ib=1 r=false
    a=1 b=1 r=false, set to 0 and remainder to true
    res=0 r=true
    decrement both ia and ib

    ia=0 ib=0 r=true
    a=1 b=1 r=true, set to 1 and keep remainder as true
    res=10 r=true
    finish decrementing

    a=0 b=0 r=true, set to 1 and set remainder to false
    res=110
    */
};
