class Wallet {  
    constructor(balance = 0) {
        this.balance = balance;
    }
    income(amount) {
        this.balance += amount;
    }
    expense(amount) {
        if (amount > this.balance) {        
            console.log("Недостатньо коштів");
        } else {
            this.balance -= amount;
        }
    }   
    getBalance() {
        return this.balance;
    }
}