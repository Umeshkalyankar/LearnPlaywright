//  Build Health Reporter
// Problem: Given the percentage of test cases passed in a CI build, report build health.

// 100 % → Green Build
// 90–99 % → Stable(investigate failures)
// 70–89 % → Unstable
// Below 70 % → Broken Build(block deployment)

let buildpercentage = 5;

if (buildpercentage === 100) {
    console.log("Green Build");
} else if ((buildpercentage >= 90) && buildpercentage <= 99) {
    console.log("Stable - investigate failures");
} else if ((buildpercentage >= 70) && buildpercentage <= 89) {
    console.log("Unstable");
} else {
    console.log(" Broken Build - block deployment")
}