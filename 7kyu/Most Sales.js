/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824
You work in the best consumer electronics corporation, and your boss wants to find out which three products
generate the most revenue. Given 3 lists of the same length like these:
products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).
Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

function top3(products, amounts, prices) {
	const revObjects = products.map((product, index) => {
		return {
			name: product,
			revenue: amounts[index] * prices[index],
			index: index
		}
	})

	const sorted = revObjects.sort((a, b) => {
		// if b.revenue === a.revenue -> order by the original 
		// position -> index
		if (b.revenue === a.revenue) {
			return a.index - b.index
		}
		return b.revenue - a.revenue
	})
	// return sorted
	return sorted.slice(0, 3).map(product => product.name)
}


// more efficient solution
function top3(products, amounts, prices) {
	// we only need a list of the revenues
	const rev = products.map(function (val, i) {
		return prices[i] * amounts[i]
	});
	const top3 = [];
	for (let i = 0; i < 3; i++) {
		// we take the largest value from the array, get the index and push the name from the rev array
		// from exactly that index to the top3 array
		top3.push(products[rev.indexOf(Math.max(...rev))]);
		// then we set the element to - 1 because we have already added it, to prevent taking it again
		// in case two values are equal
		rev[rev.indexOf(Math.max(...rev))] = -1;
	};
	return top3;
}