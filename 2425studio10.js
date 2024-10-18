// // Operator Combinations
// 2 * 3 + 4 * 5;


// // Applications
// const c = 17; 
// const e = 2;

// function power(x, e) {
//     return e === 0
//           ? 1
//           : x * power(x, e - 1);
// }
// power(c * 4, e + 1);


// // Lambda Expressions
// const f = x => x + 1;
// f(3);

// // Conditionals
// let x = 1;
// if (x > 2) {
//     11;
// } else {
//     22;
// }

// Functions: Returning from everywhere
function f(n, b) {
    if (b) {
        return n * n;
    }
    const k = 4;
    return k * n;
}

f(4, true) + 5;