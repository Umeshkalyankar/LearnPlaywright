// templete literal

let firstname = "Umesh";
let fullname = `Hi ${firstname} Deshmukh`;
console.log(fullname);

let env = 'Staging';
env = 'Prod';
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// playwright
const rawIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rawIndex}"] [data-column="${columnName}"]`).click();

// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);