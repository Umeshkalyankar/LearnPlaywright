// Real Playwright Example > Suppose prices extracted from UI:

const prices = [499, 199, 999, 299];

// sort ascending
prices.sort((a, b) => a - b); // prices low -> high
console.log(prices);

// sort descending
prices.sort((a, b) => b - a); // prices high -> low
console.log(prices);

console.log("-------------------")

// Ex-2: Product name
const actualProducts = ["Mobile", "Laptop", "Headphones"];

let expectedProducts = actualProducts.sort();
console.log(expectedProducts);