function runTest(name, status, duaration) {
    return `${name}: ${status} (${duaration}ms)`;
}
const r = runTest("Login", "Pass", 350);
console.log(r);