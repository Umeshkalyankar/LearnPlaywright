// Login Lockout After Failed Attempts
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.
// Sample Input/Output:
// Input: attempts = 2
// Output: 1 attempt left before lockout

// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support

// Input: attempts = 0
// Output: Login successful

let attempts = 3;

if (attempts >= 3) {
    console.log("Account Locked — Contact support");
}
else if (attempts > 0) {
    console.log(`${3 - attempts} attempt left before lockout`);
}
else {
    console.log("Login successful");
}