// Iterate - Go from one to another

let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("--------");

// for...of Loop (Cleanest way)
for (test of tests) {  // here 'test' is variable name simply it can be anything 
    console.log(test);
}

// Q. Why is for...of preferred in Playwright? >  Because it works correctly with await.

console.log("--------");

// for..each()
tests.forEach((test, index) => {  // here 'test' is variable name simply it can be anything 
    console.log(test, index);
});

console.log("--------");

// for...in()
let students = ["virat", "rohit", "hardik", "gill"];
for (student in students) { // here 'student' is variable name simply it can be anything - but we generally take matching name 
    console.log(student, "=>", students[student]); // in = index
}

console.log("--------");

for (let [i, test] of tests.entries()) {
    console.log([i, test]);
}