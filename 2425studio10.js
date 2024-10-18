// Env Model Exercise
function f1() {
    return () => 10;
}

function f2(x, y) {
    return () => 10;
}

function f3(x, y) {
    const z = 10;
    return () => 10;
}

f1();
f2(1, 2);
f3(1, 3);


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

// // Functions: Returning from everywhere
// function f(n, b) {
//     if (b) {
//         return n * n;
//     }
//     const k = 4;
//     return k * n;
// }

// f(4, true) + 5;