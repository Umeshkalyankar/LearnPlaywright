// Object destructuring means taking values from an object and storing them into variables easily.

let user = {
    name: "Admin",
    role: "Tester"
};
let { name, role } = user;  // The variable name should match the object key.

console.log(name);
console.log(role);

// rename
let user1 = {
    username: "Admin"
};
let { username: userName } = user1;
console.log(userName);

// Default Value - If property doesn't exist:
let user2 = {
    name: "Admin"
};

let { role1 = "Tester" } = user;
console.log(role1);

// function destructuring
function login({ username, password }) {
    console.log(username);
    console.log(password);
}
login({ username: "Admin", password: "12345" });