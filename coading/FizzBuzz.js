// Write a program that prints numbers from 1 to 100. 
// However, for multiples of 3, print "Fizz" instead of the number, 
// and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {

    // Check first if number is divisible by BOTH 3 and 5 if yes - FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Check if number is divisible only by 3 if yes - Fizz
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check if number is divisible only by 5 if yes - Buzz
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If number is not divisible by 3 or 5 - print the number itself
    else {
        console.log(i);
    }
}