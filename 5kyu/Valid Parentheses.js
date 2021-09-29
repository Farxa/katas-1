/*
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

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