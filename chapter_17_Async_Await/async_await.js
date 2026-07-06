// async is a keyword used before a function to make it asynchronous.

// await is a keyword used to pause the execution of an async function until a Promise is completed.

function getToken() {
    return Promise.resolve("abc123");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();