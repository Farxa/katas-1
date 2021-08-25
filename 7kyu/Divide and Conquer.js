/*
https://www.codewars.com/kata/57eaec5608fed543d6000021
Given a mixed array of number and string representations of integers, add up the string integers
and subtract this from the total of the non - string integers.
*/


function divCon(arr) {
	let sumStrings = 0;
	let sumNumbers = 0;
	for (let num of arr) {
		if (typeof num === 'string') {
			sumStrings += Number(num);
		} else {
			sumNumbers += num;
		}
	}
	return sumNumbers - sumStrings;
}


function divCon(arr) {
	let sum = 0;
	for (let num of arr) {
		// console.log(typeof num === 'string');
		if (typeof num === 'string') {
			sum -= num;
		} else {
			sum += num
		}
	}
	return sum
}

function divideAndConquer() {
	return arr.reduce(function (sum, num) {
		if (typeof num === 'string') {
			return sum - Number(num)
		}
		return sum + num
	}, 0)
}
console.log(divCon([9, 3, '7', '3']))