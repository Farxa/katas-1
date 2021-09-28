/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155
For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l 
return the first in order of appearance.
For empty string return:
["", 0]
Happy coding! :)
*/

function longestRepetition(s) {
	let longestReps = 0;
	let longestChar = '';
	let repetition = 1;
	let char = '';
	// iterate over s
	for (let i = 0; i < s.length; i++) {
		char = s[i];
		// is the next char the same as char
		if (s[i + 1] === char) {
			// we count a repetition
			repetition++
		} else {
			// we compare this repetition to the currently longest
			if (repetition > longestReps) {
				longestReps = repetition;
				longestChar = char;
			}
			repetition = 1;
		}
	}
	return [longestChar, longestReps];
}