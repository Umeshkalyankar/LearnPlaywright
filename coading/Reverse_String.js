// reverse string
let text = "Login";
let reversed = "";   // empty string to store

for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
}
console.log(reversed);


// check palindrome > text = madam

let text1 = "madam";
let reverse = "";


for (let i = text1.length - 1; i >= 0; i--) {
    reverse = reverse + text1[i];
}
if (text1 === reverse) {
    console.log(`${text1} is Palindrome`);
}
else {
    console.log(`${text1} is Not Palindrome`)
}