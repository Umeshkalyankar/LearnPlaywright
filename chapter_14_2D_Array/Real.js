let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["sea2rch", "pass", 180]
];

// how many test cases we have executed? = 3
// how many test cases are passed? = 2

// iterate
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
    console.log();
}