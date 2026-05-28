// Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical(block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score


let bugScore = 9;

if (bugScore >= 9) {
    console.log("Severity: Critical- (block release)");
} else if ((bugScore >= 7) && bugScore <= 8) {
    console.log("Severity: High");
} else if ((bugScore >= 4) && bugScore <= 6) {
    console.log("Severity: Medium");
} else if ((bugScore >= 1) && bugScore <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}