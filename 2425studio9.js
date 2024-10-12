// Evaluating Blocks

// Example 1
// let x = 3;

// {
//     const x = 5;
//     let y = 8;
// }

// Example 2
// let x = 3;

// if (x <= 1) {
//     let y = x;
//     x = y + 1;
// } else {
//     let z = x;
//     x = z * z;
// }
// {
//     x = x + 1;   
// }
// {
//     let x = 5;
//     let y = 8;
//     {
//         let x = 20 + y;
//     }
//     x = x + 1;
// }

// Functions
// Lambda Expressions
// const square = x => x * x;
// square(5);

// Function with Local Declarations
// function cube(x) {
    // let y = x * x * x;
    // return y;
// }

// cube(3);

// Factorial
// function factorial(n) {
    // return n <= 1 ? n : n * factorial(n - 1);
// }

// factorial(2);

// make_withdraw
// function make_withdraw(balance) {
//     return amount => {
//         if (balance >= amount) {
//             balance = balance - amount;
//             return balance;
//         } else {
//             return "Insufficient funds";
//         }
//     };
// }

// const W1 = make_withdraw(100);
// W1(40);

// Sharing and Identity
// const a = pair(2, 3);
// const b = a;

// const a = pair(2, 3);
// const b = pair(2, 3);

// a === b;

// Returns a 2D array that represents 
//   a rows x cols zero matrix

// function zero_matrix(rows, cols) {
//     const M = [];
//     let r = 0;
//     while (r < rows) {
//         M[r] = [];
//         let c = 0;
//         while (c < cols) {
//             M[r][c] = 0;
//             c = c + 1;
//         }
//         r = r + 1;
//     }
//     return M;
// }

// const mat3x4 = zero_matrix(3, 4);
// mat3x4;

// CSE Machine
let x = 0;
(x = x + 1) * x; // we evaluate left to right (right to left would give a different answer)

// Control keeps track of what to run/program to run
// Control deconstructs the expression into its components
// splits it up into 2 * 3 and 4 * 5 in control
// splits 2 * 3 up, puts 2 and 3 onto stack. Multiply. Result of multiply goes to stash.
// splits 4 * 5 up, puts 4 and 5 onto stack. Multiply. Result of multiply goes to stash.
// add with values in stack. Result go to stash
2 * 3 + 4 * 5; // first example




// Studio S9

// function d_filter(pred, xs) { 
//     if (is_null(xs)) {
//         return xs;
//     } else if (pred(head(xs))) {
//         set_tail(xs, d_filter(pred, tail(xs)));
//         return xs;
//     } else {
//         return d_filter(pred, tail(xs));
//     }
// }

// const L = list(1, 2);
// d_filter(x => x % 2 === 0, L);
// // L1; omit this first, assign L1 later.
// L;



