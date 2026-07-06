let promise = new Promise((resolve, reject) => {
    let laptop = false;

    if (laptop) {
        resolve("Laptop Delivered");
    } else {
        reject("Order Canceled");
    }
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });