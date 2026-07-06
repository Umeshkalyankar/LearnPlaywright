// basic callback:
function greet(name, callback) {
    console.log('Hello' + name);
    callback();
}

// callback function - declaration
function welcome() {
    console.log('welcome!!!!');
}

// Calling
greet('Umesh', welcome);



// callback with async function
function printInfo(name, callback) {
    // async function/task/step:
    setTimeout(function () {
        console.log("printing info for " + name);
        callback("Plz call me back.......");
    }, 2000); // delay of 2000ms/2 sec
}

//callback
function displyMessage(msg) {
    console.log(msg);
}

//calling
printInfo("Lisa", displyMessage);