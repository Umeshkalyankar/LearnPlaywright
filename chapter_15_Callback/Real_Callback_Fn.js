function login(callback) {
    console.log("Login Completed");
    callback();
}
// function calling - Arrow function
login(() => {
    console.log("Open Dashboard");
})