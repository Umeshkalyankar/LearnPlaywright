class BankAccount {

    #balance = 10000;       // private data

    deposit(amount) {       // method 1
        //this.#balance += amount;
        this.#balance = this.#balance + amount;
    }

    getBalance() {        // method 2
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(250);             // depositing the balance
let get = account.getBalance();   // checking the balance
console.log(get);

// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
