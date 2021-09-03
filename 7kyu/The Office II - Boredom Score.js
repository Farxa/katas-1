/*
https://www.codewars.com/kata/57ed4cef7b45ef8774000014
Every now and then people in the office moves teams or departments. Depending what people are doing 
with their time they can become more or less boring. Time to assess the current team.
You will be provided with an object(staff) containing the staff names as keys, and the department 
they work in as values.
Each department has a different boredom assessment score, as follows:
accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25
Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

// lookup object - another option would be to have the same logic in if else / switch statements
const score = {
	accounts: 1,
	finance: 2,
	canteen: 10,
	regulation: 3,
	trading: 6,
	change: 6,
	IS: 8,
	retail: 5,
	cleaning: 4,
	"pissing about": 25,
}

function boredom(staff) {
	let boredomLevel = 0;
	for (let person in staff) {
		// person is every one of the keys of the staff object for
		// every iteration - with that you can then also access the values
		console.log(staff[person])
		boredomLevel += score[staff[person]]
	}
	// you can also use Object.values()
	// Object.values(staff).forEach(function(department) {
	//   boredomLevel += score[department]
	// })
	if (boredomLevel <= 80) return 'kill me now'
	if (boredomLevel > 80 && boredomLevel < 100) return 'i can handle this'
	return 'party time!!'
}