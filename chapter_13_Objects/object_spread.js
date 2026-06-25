// ... = take all properties from an object and spread them

let user1 = {
    name: "Admin",
    role: "Tester"
};
let user2 = { ...user1 };  // creates a new object.

user2.role = "Developer";
console.log(user1.role);

// 2. Add New Property While Copying

let user = {
    name: "Admin"
};
let updatedUser = {
    ...user, role: "Tester"
};
console.log(updatedUser);

// 3. Update Existing Property
let user3 = {
    name: "Admin",
    role: "Tester"
};
let newUser = {
    ...user3,
    role: "Developer"
};
console.log(newUser.role);

// 4. Merge two objects
let user4 = {           // object 1
    name: "Admin"
};
let details = {        // object 2
    role: "Tester",
    experience: 2
};
let employee = {      // merge 2 objects
    ...user4, ...details
};
console.log(employee);

// Real playwright 
let loginData = {
    username: "admin",
    password: "12345"
};
let testData = {
    ...loginData,
    browser: "Chrome"
};
console.log(testData);