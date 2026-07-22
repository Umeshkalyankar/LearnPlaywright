class BankAccount {

    username;
    #balance; // private variables not allowed to use outside 

    constructor(username, balance) {
        this.username = username;
        this.#balance = balance;
    }

    accountBalance() {
        console.log(this.#balance);     // private can be accessed inside class
    }
}

let account = new BankAccount("umesh", 100000);
console.log(account.username);
// console.log(account.#balance);  // error - private variable must be used in class
account.accountBalance();