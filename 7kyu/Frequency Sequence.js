/*
https://www.codewars.com/kata/frequency-sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s
with a number representing the number of times that character occurs in s/$s and separating each number
with the character(s) sep/$sep.
*/

const freqSeq = (str, sep) => {
	let result = ''
	str.split('').forEach(function (char) {
		result += str.split(char).length - 1 + sep
	})
	return result.slice(0, result.length - 1)
}

const freqSeq = (s, sep) => s
	.split('')
	.map((char) => s.split(char).length - 1)
	.join(sep)