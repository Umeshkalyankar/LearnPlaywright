// leap year rule - A year is leap year if:
// (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, " is leap year");
} else {
    console.log(year, " not a leap year");
}