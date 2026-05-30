// Triangle Classifier:
// Write a program that classifies a triangle based on its side lengths.
// Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal),
// isosceles (exactly two sides are equal), or scalene (no sides are equal).
// Use an if-else statement to classify the triangle.


// Triangle Classifier

let side1 = 5;
let side2 = 9;
let side3 = 10;

// Check if all three sides are equal
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
}
// Check if any two sides are equal
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
}
// If no sides are equal
else {
    console.log("Scalene Triangle");
}