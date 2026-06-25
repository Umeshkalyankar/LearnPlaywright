// for...in is used to loop through object keys (properties).
// syntax: for(let key in object){}



// let user = {
//     name: "Admin",
//     role: "Tester",
//     age: 25
// };
// for (let key in user) {
//     console.log(key);  // this is for only getting key from objects
// };


// value from objects
// let user1 = {
//     name: "Admin",
//     role: "Tester"
// };
// for (let key in user1) {
//     console.log(user1[key]);  // this is to get values from object
// }


// Key + Value Together
let user = {
    name: "Admin",
    role: "Tester"
};
for (let key in user) {
    console.log(key + " : " + user[key]);  // key & value together
}


// real example
let loginData = {       // object
    username: "admin",
    password: "12345",
    browser: "Chrome"
};
for (let data in loginData) {  // loop
    console.log(data + " = " + loginData[data]); // to get key & value data
}