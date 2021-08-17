/*
https://www.codewars.com/kata/55eea63119278d571d00006a
You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
Go on and code some pure awesomeness!
*/

function nextId(ids) {
	for (i = 0; i < ids.length + 1; i++) {
		if (!ids.includes(i)) return i;
	}
}

function nextId(a) {
	let x = 0;
	while (a.includes(x)) {
		x++;
	}
	return x;
}

// we can omit the conditional in the loop to make it run infinitely
// you still need to add the semicolon though
function nextId(a) {
	for (let i = 0; ; i++) {
		if (!a.includes(i)) return i;
	}
}