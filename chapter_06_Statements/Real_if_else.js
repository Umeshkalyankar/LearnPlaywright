let isLoggedIn = false;
let userRole = "editor";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("Welcome Admin - You can do anything!");
    }
    else if (userRole === "editor") {
        console.log("Welcome editor - Edit access granted!");
    } else if (userRole === "view") {
        console.log("Wecome - You are only viewer of the app!");
    } else {
        console.log(" You are a guest!");
    }
}
else {
    console.log("You are not logged in!");
}