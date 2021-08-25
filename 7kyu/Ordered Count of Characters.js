/*
https://www.codewars.com/kata/57a6633153ba33189e000074/
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/


// steps to implement
// create an array without the duplicates -> ['a', b, r, c, d]
// map over that array and replace every character with an array -> [[], [], [], [], []]
// at the first index should be the character we are currently at [['a'], ['b'] ...]
// in the second index we need the number of occurences of the letter we are at in 'text' -> check how many times a character occurs in a string
// -> [['a', 5], ['b', 2] ...]

// helper function to count number of occurences of char in string
function count(str, char) {
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) counter++
	}
	return counter
}

function orderedCount(text) {
	// const noDuplicates = [...new Set(text.split(''))];
	const noDuplicates = text.split('').filter(function (char, i) {
		return text.indexOf(char) === i
	})
	const result = noDuplicates.map(function (char) {

		return [char, count(text, char)]
	})
	return result
}