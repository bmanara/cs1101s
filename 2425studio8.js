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