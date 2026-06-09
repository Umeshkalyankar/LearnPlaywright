// if (ourStatusCode >=200 && ourStatusCode <300)
// noraml function
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

// function as expressions
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

// Arrow function 
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}