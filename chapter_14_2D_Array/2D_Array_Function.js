let scores = [
    [85, 90, 78], // student 0
    [60, 45, 70], // student 1
    [95, 88, 92] // student 2
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));  // sum of rows
console.log(rowSums);