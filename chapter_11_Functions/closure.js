// Closure is when an inner function remembers and .
// can access variables from its outer function even after the outer function has finished executing.
function login() {

    let username = "admin";
    function displayUser() {

        console.log(username);
    }
    return displayUser;
}
let user = login();
user();


console.log("----------------------------------")

function createUser(userRole) {

    return async function () {

        console.log(userRole);
    };
}

const adminUser = createUser("Admin");
adminUser();