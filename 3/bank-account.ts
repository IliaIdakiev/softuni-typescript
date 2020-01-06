abstract class CreateAccount<N, I> {
  constructor(public bankName: N, public bankID: I) { }
}

class PersonalAccount<N, I> extends CreateAccount<N, I> {
  readonly ownerName: string;
  money = 0;
  recentTransactions: { [key: string]: number } = {};

  constructor(bankName: N, bankID: I, on: string) {
    super(bankName, bankID);
    this.ownerName = on;
  }

  deposit(amount: number) {
    this.money += amount;
  }

  expense(amount: number, expenseType: string) {
    if (this.money - amount < 0) { throw "You cant make {expenseType} transaction"; }
    this.money -= amount;
    this.recentTransactions[expenseType] =
      (this.recentTransactions[expenseType] || 0) + amount;
  }

  showDetails() {
    const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce(
      (acc, curr) => acc + curr, 0
    );
    return `Bank name: ${this.bankName}
    Bank ID: ${this.bankID}
    Owner name: ${this.ownerName}
    Money: ${this.money}
    Money spent: ${totalMoneySpentOnExpenses}
    `
  }
}


let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());


let account2 = new PersonalAccount(3333, 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());