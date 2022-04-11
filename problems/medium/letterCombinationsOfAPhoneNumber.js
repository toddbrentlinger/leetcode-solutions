'use strict';

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    /*
    2 - a,b,c (3)
    3 - d,e,f (3)
    4 - g,h,i (3)
    5 - j,k,l (3)
    6 - m,n,o (3)
    7 - p,q,r,s (4)
    8 - t,u,v (3)
    9 - w,x,y,z (4)
    -------------------
    2
    a,b,c
    -------------------
    23
    a,b,c - d,e,f
    
    ad, ae, af
    bd, be, bf
    cd, ce, cf
    -------------------
    234
    a,b,c - d,e,f - g,h,i
    
    adg, adh, adi
    aeg, aeh, aei
    afg, afh, afi
    
    bdg, bdh, bdi
    beg, beh, bei
    bfg, bfh, bfi
    
    cdg, cdh, cdi
    ceg, ceh, cei
    cfg, cfh, cfi
    -------------------
    */

    // Check for empty digits
    if (!digits.length) return [];
    
    const letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    
    function multiplyArrays(arr1, arr2) {
        let newArr = [];
        let char1, char2;
        for (char1 of arr1) {
            for (char2 of arr2) {
                newArr.push(char1.concat(char2));
            }
        }
        return newArr;
    }
    
    let lettersArr = letters[digits[0]];
    for (let i = 1; i < digits.length; i++) {
        lettersArr = multiplyArrays(lettersArr, letters[digits[i]]);
    }
    return lettersArr;
};

var letterCombinations01 = function(digits) {
    // Check for empty digits
    if (!digits.length) return [];
    
    const letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    
    function multiplyArrays(arr1, arr2) {
        let newArr = [];
        let char1, char2;
        for (char1 of arr1) {
            for (char2 of arr2) {
                newArr.push(char1.concat(char2));
            }
        }
        return newArr;
    }
    
    let lettersArr = letters[digits[0]];
    for (let i = 1; i < digits.length; i++) {
        lettersArr = multiplyArrays(lettersArr, letters[digits[i]]);
    }
    return lettersArr;
};