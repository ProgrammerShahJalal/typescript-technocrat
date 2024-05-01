// Learning Function
// Normal Function
// Arrow Function
function add(x, y) {
    return x + y;
}
add(3, 4);
// object --> function --> method
var poorMan = {
    name: 'John',
    age: 25,
    balance: 100.0,
    deposit: function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log('Deposit must be greater than zero');
        }
    },
    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("You can't withdraw more than your balance");
        }
    }
};
var arr = [1, 4, 8];
var newArr = arr.map(function (e) { return e * e; });
console.log(newArr);
