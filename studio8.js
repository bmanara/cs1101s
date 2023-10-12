// 1 + (2 + (3 + (4 + (5 + 6))));

// ((((1 + 2) + 3) + 4) + 5) + 6;

// (1 + 2 + 3) + (4 + 5 + 6);

// (1 + 2) + (3 + 4) + (5 + 6);

// const c = 1;
// let x = c + 2;
// const d = c + x;
// let y = 3;
// x = c;
// y = d;

// 1 + 2;
// const x = 1;
// 3 * 4;
// let y = x - 7;

// while(false) {
//     1 + 2;
// }


// let x = 1;
// while(x < 10) {
//     x = x * 2;
// }

// let x = undefined;
// for (x = 0; x < 10; x = x + 2) {
//     x;
// }

// Reflection 8
// Question 1

function make_withdraw(balance, password) {
    let counter = 0;
    function withdraw(amount, input) {
        if (counter >= 3) {
            return "Account disabled";
        } else if (password !== input) {
            counter = counter + 1;
            return "Wrong password; no withdraw";
        } 
        
        counter = 0;
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    return withdraw;
}


const acc = make_withdraw(100, "my_password");
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns 70
acc(10, "sesame"); // returns "Wrong password; no withdraw"
acc(15, "canola"); // returns "Wrong password; no withdraw"
acc(25, "olive"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns "Account disabled"
acc(30, "his_passcode"); // returns "Account disabled"

// Question 2 
let commission = 25; // my commission in dollars
// return a calculator for total price
// total price = (commission + cost) * (1 + tax_rate)
function make_price_calculator(tax_rate) {
    function calculator(cost) {
        return (commission + cost) * (1 + tax_rate);
    }
    return calculator;
}

const calc = make_price_calculator(0.07);
commission = 125;
calc(75);

// Question 3
function curry(f) {
    return x => y => f(x, y);
}
(curry(math_pow))(3)(4);

// Example given in Reflection 
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

abs(5) + 3; 

// Running in CDE will show us how the CDE cuts off the function and returns 
// what we want, instead of running the remainder of it after returning x
