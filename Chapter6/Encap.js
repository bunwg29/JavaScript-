class BankAccount {
    constructor(balance) {
      this._balance = balance; // Private property
    }
  
    deposit(amount) {
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (this._balance >= amount) {
        this._balance -= amount;
      } else {
        console.log("Insufficient funds.");
      }
    }
  
    getBalance() {
      return this._balance;
    }
  }
  
  const account = new BankAccount(100);
  account.deposit(50); // Depositing money
  console.log(account.getBalance()); // Accessing balance
  
  // We can't directly access or modify _balance
  // console.log(account._balance); // Error 