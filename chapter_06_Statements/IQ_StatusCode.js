// HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid


let statusCode = 304;

if ((statusCode >= 200) && statusCode <= 299) {
    console.log("Success");
} else if ((statusCode >= 300) && statusCode <= 399) {
    console.log("Redirection");
} else if ((statusCode >= 400) && statusCode <= 499) {
    console.log("Client error");
} else if ((statusCode >= 500) && statusCode <= 599) {
    console.log("Server error");
} else {
    console.log("Invalid");
}