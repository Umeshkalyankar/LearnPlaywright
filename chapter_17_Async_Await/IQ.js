async function sayHello() {
    return "Hello, QA!";
}

sayHello().then((msg) => {
    console.log(msg);
})

// await does not needed if function is async

async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);
}
getStatus();