/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
You are given array of integers, your task will be to pairs all pairs in that array and return their pairs.
Notes:
Array can be empty or contain only one value; in this case return 0
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

// we create a new array - for each number we check if that number is in the array
// if not we put in in there, if it is we remove it and count a pair
function duplicates(array) {
	let myArr = [];
	let pairs = 0;
	for (el of array) {
		if (myArr.includes(el)) {
			myArr.splice(myArr.indexOf(el), 1)
			pairs++
		} else {
			myArr.push(el);
		}
	}
	return pairs;
}

// more efficient by using the indices
function duplicates(array) {
	let double = []
	let pairs = 0
	array.forEach(el => {
		if (double[el] != el) {
			double[el] = el
		} else {
			double[el] = undefined
			pairs++
		}
	})
	return pairs
}

// same as above but using an object as the datastructure to keep track of the pairs
function duplicates(array) {
	const list = {}
	let pairs = 0
	array.forEach(num => {
		if (list[num]) {
			delete list[num]
			pairs++
		} else {
			list[num] = 1
		}
	})
	return pairs
}

// same as above but using an object as the datastructure to keep track of the pairs
function duplicates(array) {
	const list = {}
	let pairs = 0
	array.forEach(num => {
		if (list[num]) {
			delete list[num]
			pairs++
		} else {
			list[num] = 1
		}
	})
	return pairs
}

// sorting the array and then counting the pairs
function duplicates(array) {
	// sort the array
	array.sort((a, b) => b - a)

	let pairs = 0;

	for (let i = 0; i < array.length; i++) {
		// check if the following number is the same -> we found a pair 
		if (array[i] === array[i + 1]) {
			pairs++;
			// if we found a pair we have to jump by one -> setting the index to a position after the pair
			i++;
		}
	}
	return pairs;
}