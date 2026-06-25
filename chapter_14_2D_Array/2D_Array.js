// Multidimensional Array 2D > Array inside another array
// 2D array stores data into rows & column

let a = [1, 2, 3, 4]  // single array

let grid = [
    [1, 2, 3],
    [3, 5, 6],
    [7, 8, 9]
]

// accessing 
console.log(grid[0][0]);
console.log(grid[1][2]);
console.log(grid[2][2])

// Loop Multidimensional Array
for (let i = 0; i < grid.length; i++) {
    console.log(grid[i]);
}

// nested loop print all elements
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        console.log(grid[i][j]);
    }
}