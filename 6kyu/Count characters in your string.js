/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091
The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(s) {
	const obj = {}
	// iterate over the input string
	for (let i = 0; i < s.length; i++) {
		// is this char already a key in the obj?
		if (obj[s[i]]) {
			// increment the value
			obj[s[i]]++
		} else {
			// add the key with value 1
			obj[s[i]] = 1
		}
	}
	return obj
}

function count(s) {
	const obj = {}
	const nonDuplicates = [...new Set(s)]
	nonDuplicates.forEach(function (char) {
		const numberOfOccurences = s.split(char).length - 1;
		const key = char;
		console.log(key, numberOfOccurences)
		obj[key] = numberOfOccurences;
		console.log(obj)
	})
	return obj
}