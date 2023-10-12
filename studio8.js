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


// Question 1 (Reflection 8)

function make_withdraw(balance, password) {
    let counter = 0;
    function withdraw(amount, input) {
        if (counter >= 3) {
            return "Account disabled";
        } else if (password !== input) {
            counter = counter + 1;
            return "Wrong password; no withdraw";
        } else if (balance >= amount) {
            counter = 0;
            balance = balance - amount;
            return balance;
        } else {
            counter = 0;
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