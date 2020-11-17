"use strict";

/**
 * Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	// Test for empty arrays and empty strings 
	if (!strs.length || strs.includes(""))
		return "";

	let commonPrefix = "";
	let isMatching = true;
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[0][i] !== strs[j][i]) {
				isMatching = false;
				break;
			}
		}
		if (!isMatching) {
			break;
		} else {
			commonPrefix += strs[0][i];
		}
	}
	return commonPrefix;
};