// Nested Constant Declarations
function square(n) {
    return n * n;
}

function f(x, y) {
    const a = 1 + x * y; // Declaring constants into our function block
    const b = 1 - y;
    return x * square(a) + y * b + a * b;
}

f(2, 3);

/*
When a function is called multiple times, we can also declare it into a 
constant
If else conditional statements 
If (predicate) {consequent} else {alternate}
Let's go back to our fractal function in Rune Reading
*/

import { show, beside, stack, heart } from "rune";

function fractal_2(rune, n) {
    if (n === 1) {
        return rune;
    }
    else {
        const smaller_frac = fractal_2(rune, n - 1);
        return beside(rune, stack(smaller_frac, smaller_frac));
    }
}

show(fractal_2(heart, 5));
// Note that only smaller_frac can be used in the else block, no where else.
// Local scope must be enforced here

// Fractal with iterative process, is it possible? Yes.

// Coin Change
// Given: Different kinds of coins (unlimited supply)
// Given: Amount of money in cents
// Wanted: Number of ways to change amount into coins

// If we are given 10 cents, there are 2 ways to mak change, give a 10 cent, or give a 5 cent etc.

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 5 :
          kinds_of_coins === 2 ? 10 :
          kinds_of_coins === 3 ? 20 :
          kinds_of_coins === 4 ? 50 :
          kinds_of_coins === 5 ? 100 : 0;
}

function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
          : cc(amount - first_denomination(kinds_of_coins), kinds_of_coins) // Consider all cases wtih largest denomination
           + cc(amount, kinds_of_coins - 1);    // Consider with second largest denomination, then third, then fourth and last
}

// Higher Order Function 1.3.1, 1.3.2, 1.3.4
// Can take in a function as an argument or return a function 
function sum_integers(a, b) {
    return a > b
           ? 0
           : a + sum_integers(a + 1, b);
}

function cube(x) {
    return x * x * x;
}

function sum_skip_cubes(a, b) {
    return a > b
           ? 0
           : cube(a) + sum_skip_cubes(a + 2, b);
}

// Looking at the 2 functions above, they are basically the same, how can we abstract it out?
function sum(term, a, next, b) {
    return a > b 
           ? 0
           : term(a) + sum(term, next(a), next, b);
}

function sum_skip_cubes_2(a, b) {
    function plus_two(n) {
        return n + 2;
    }
    
    return sum(cube, a, plus_two, b);
}

// Lambda Functions
// Simplifying our functions passed into sum();
// (parameters) => expression
const sum_skip_cubes_3 = (a, b) => {
    return sum(x => x * x * x, a, x => x + 2, b);
};

sum_skip_cubes(4, 6);
sum_skip_cubes_2(4, 6);
sum_skip_cubes_3(4, 6);

// Returning a function (visualize using stepper)
function adder(x) {
    function add(y) {
        return x + y;
    }
    
    return add;
}

const plus_two = adder(2);
plus_two(5);
adder(5)(3);

// Scope of Names
// Global vs Local Scope
// There are 4 types of Declarations we learned, Pre-Declared Names, 
// Constant Declarations, Parameters of Functions, Function name of Function declarations

// Data Types / Type Declarations (Source 1 S1 Typed)
const x: number = 2;
function f(x: number): number {
    return x;
}

function rpn(n: number,
             pattern: (number) => number,
             x: number): number {
                 return n === 0
                        ? x
                        : rpn(n - 1, pattern, pattern(x));
}

// If Else Statements
if (x > 0) {
    return "x is positive";
}   else if (x < 0) {
    return "x is negative";
} else {
    return "x is zero";
}


