class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed");
        }
    }
}

const umesh = new ICICI("Umesh", 2000);
console.log(umesh.getBalance());

umesh.setBalance(100000, false)
console.log(umesh.getBalance());