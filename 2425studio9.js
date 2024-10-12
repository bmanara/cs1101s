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
//   a rows x cols zero matrix.
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

// Studio S9
function d_filter(pred, xs) { 
    if (is_null(xs)) {
        return xs;
    } else if (pred(head(xs))) {
        set_tail(xs, d_filter(pred, tail(xs)));
        return xs;
    } else {
        return d_filter(pred, tail(xs));
    }
}

const L = list(1, 2);
d_filter(x => x % 2 === 0, L);
// L1; omit this first, assign L1 later.
L;



