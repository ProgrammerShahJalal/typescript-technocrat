// Learning Function
// Normal Function
// Arrow Function

function add(x:number, y:number): number { 
    return x + y; 
}

add(3,4);

// object --> function --> method

const poorMan = {
    name: 'John',
    age: 25,
    balance: 100.0,
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log('Deposit must be greater than zero');
        }
    },
    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("You can't withdraw more than your balance");
        }
    }
};


const arr : number[] = [1, 4, 8];
const newArr : number[] = arr.map(e => e*e );
console.log(newArr);


