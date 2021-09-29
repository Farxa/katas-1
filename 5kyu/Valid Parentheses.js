/*
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100k
*/

function validParentheses(parens) {
	while (parens.includes('()')) {
		// remove the pair of parens
		parens = parens.replace('()', '')
		// alternative
		// parens = parens.split('()').join('')
	}
	return parens === ''
}

function validParentheses(parens) {
	let counter = 0;
	for (let p of parens) {
		if (p === '(') counter++;
		if (p === ')') counter--;
		if (counter < 0) return false
	}
	return counter === 0
}