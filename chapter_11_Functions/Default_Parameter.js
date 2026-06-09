function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times ${delay}ms apart`);
}
retry("Login Test"); // in no argument passed - default value used
retry("Registration Page", 5, 2000); // if argument passed - deafult value ignored