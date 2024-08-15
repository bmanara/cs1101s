/* Operand Expressions */
// 1000 - 334;
// 300 + 200;

// 3 * 5 + 2 * 10;

/*
3 * 2 * (3 - 5 + 4) 
+ 
27 / 6 * 10;
*/

/* Naming and the Environment */
/*
// Constant Declarations
const pi = 3.14;
const radius = 10;

const circumference = 2 * pi * radius;
circumference;
*/

/* Compound Functions */

// Function Declaration 
/*
function square(x) {
    return x * x;
}
*/

// square(21);
// square(4 + 3);
// square(square(3));

/*
function sum_of_squares(x, y) {
    return square(x) + square(y);
}

// sum_of_squares(2, 4);
*/

/* Conditional Expressions & Predicates */

/*
function abs1(x) {
    return x >= 0 ? x : -x;
}

function abs2(x) {
    return x > 0
           ? x
           : x === 0
           ? 0
           : -x;
}
*/

/*
function greater_or_equal(x, y) {
    return x > y || x === y;
}

// other ways of expressing the above return statement?
*/

// greater_or_equal(5, 4);
// greater_or_equal(6, 6);
// greater_or_equal(2, 6);

/* Modulo Operator */
// 5 % 2;
// 6 % 2;
// 30 % 7;
// 40 % 7;

/* Pre-declared Functions */
// math_floor(5 / 2);
// math_floor(6 / 2);
// math_floor(30 / 7);

// math_ceil(30 / 7);
// math_max(2, 4);
// math_max(3, 5, 6);

