// Rest of the parameters

function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}
logResult('Login Test', 1, 2, 3);
logResult('Registration Test', 'Hello', 'Umesh');


// results = [] > array