/*
https://www.codewars.com/kata/56eb0be52caf798c630013c0
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year as an integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year) {
	let blackFridays = 0;
	for (let i = 0; i < 12; i++) {
		const date = new Date(year, i, 13)
		if (date.getDay() === 5) {
			blackFridays++
		}
	}
	return blackFridays
}