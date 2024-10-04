// Assignment
function make_account(initial_balance) {
    let balance = initial_balance;
    
    function withdraw(amount) {
        if (balance >= amount) {
            balance = balance - amount;
            return balance; // reassigns value 
        } else {
            display("Insufficient funds");
            return balance; // reassigns value 
        }
    }
    return withdraw;
}

// const W = make_account(100);
// W(40);
// W(40);
// W(40);

// Functional Approach
function fn_make_account(initial_balance) {
    const balance = initial_balance;
    
    function withdraw(amount) {
        if (balance >= amount) {
            return fn_make_account(balance - amount); // creates a new account!
        } else {
            display("Insufficient funds");
            return fn_make_account(balance); // creates a new account!
        }
    }
    return withdraw;
}

// const W1 = fn_make_account(100);
// const W2 = W1(40);
// const W3 = W2(40);
// const W4 = W3(40);

// Showing independence of accounts
const W5 = make_account(100);
const W6 = make_account(100);

// W5 and W6 are completely independent from each other
// Each has its own state variable balance
// Therefore, withdrawals do not affect one another
W5(50);
W6(80);
W5(80);
W6(20);


// Mutable Data Exercises
const a = list(1, 3, 5);
const b = list(2, 4);
const c = append(a, b);

set_head(a, 20);

c;

// Arrays
const arr1 = [10, 20, 30, 40]; // array of length 4
let arr2 = []; // empty array

arr1[0]; // 10
arr1[1]; // 20
arr1[3] = 50;

array_length(arr1); // 4

// while loop
function factorial_w(n) {
    let acc = 1;
    let k = 1;
    while (k <= n) {
        acc = acc * k;
        k = k + 1;
    }
    return acc;
}

// for loop
function factorial_f(n) {
    let acc = 1;
    for (let k = 1; k <= n; k = k + 1) {
        acc = acc * k;
    }
    return acc;
}

// break
for (let i = 1; i < 5; i = i + 1) {
    display(stringify(i) + " here");
    if (i === 2) {
        break;
    }
    display(stringify(i) + " there");
}
display("OK");
