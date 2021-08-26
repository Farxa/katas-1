/*
https://www.codewars.com/kata/58daa7617332e59593000006
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(a) {
	let longest = a[0];
	for (let num of a) {
		if (num.toString().length > longest.toString().length) {
			longest = num;
		}
	}
	return longest;
}

// using reduce
function findLongest(array) {
	return array.reduce(function (acc, val) {
		if (val.toString().length > acc.toString().length) {
			return val
		}
		return acc
	})
}