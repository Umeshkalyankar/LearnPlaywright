// Generic = write code once, but allow it to work with different data types while still keeping type safety.
// where T is commonly used to represent the generic type.

function getTestData<T>(data: T): T {
    return data;
}

const username = getTestData<string>("admin");
console.log(username);

const retryCount = getTestData<number>(3);
console.log(retryCount);


const isEnabled = getTestData<boolean>(true);
console.log(isEnabled);