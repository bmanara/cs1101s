// Evaluating Blocks

// Example 1
let x = 3;

{
    const x = 5;
    let y = 8;
}

// Example 2
let x = 3;

if (x <= 1) {
    let y = x;
    x = y + 1;
} else {
    let z = x;
    x = z * z;
}
{
    x = x + 1;   
}
{
    let x = 5;
    let y = 8;
    {
        let x = 20 + y;
    }
    x = x + 1;
}

// Functions
// Lambda Expressions
const square = x => x * x;
square(5);

// Function with Local Declarations
function cube(x) {
    let y = x * x * x;
    return y;
}

cube(3);

// Factorial
function factorial(n) {
    return n <= 1 ? n : n * factorial(n - 1);
}

factorial(2);

// make_withdraw
function make_withdraw(balance) {
    return amount => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    };
}

const W1 = make_withdraw(100);
W1(40);

Sharing and Identity
const a = pair(2, 3);
const b = a;

const a = pair(2, 3);
const b = pair(2, 3);

a === b;

// Returns a 2D array that represents 
//   a rows x cols zero matrix

function zero_matrix(rows, cols) {
    const M = [];
    let r = 0;
    while (r < rows) {
        M[r] = [];
        let c = 0;
        while (c < cols) {
            M[r][c] = 0;
            c = c + 1;
        }
        r = r + 1;
    }
    return M;
}

const mat3x4 = zero_matrix(3, 4);
mat3x4;

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

// Stash gets read right from left, right being the latest push.
// Control gets read bottom up
// We now know how our deferred operations, intermediate and result of program is stored!

// const x = 1; // gives undefined 
// Constant declarations are non-value producing statements
// Nothing is left in the stash...
// So, result is the special value undefined

// Seqeuences
// Expression statements are value producing
// We see pop removing the result of the expressions except the last...
2 + 3;
4 / 5;
6 * 7; // last value producing statement in our program

// const x = 4; // add this at the end to show the value producing...
// display(x);

// Conditional Expression
const x = true; // asgn x is put into the control, and then pop cause... (not value producing)
x ? 1 + 2 : 3 * 4; // value producing!
// decomposed, predicate is placed into the control, along with branch instruction
// true gets placed into the stash, branch inst checks for this value in the stash

//  Logical Compositions
const x = true;
const y = false;
x || y;

// Conditional Statements
// Similar to how conditional expression is done. Also value producing

// Assignments
let x = 0;
x = x + 1; // does not pop the result out of stash

// while Loop (value producing too!)
let n = 5;
let i = 1;
let result = 1;
while (i < n) {
    i = i + 1;
    result = result * i;
}
// pushes undefined into stash first, to deal with the case that we do not run while loop body
// evaluate predicate, result pushed into stash
// while instruction is run, checks the value of the stash. 
// if true, replace with needed instructions
// else, remove while instruction from control
// we will see that the result of the last evaluation in the while loop will be left in the stash

// for loop (value producing too!)
const n = 5;
let i = undefined;
let result = 1;
for (i = 1; i <= n; i = i + 1) {
    result = result * i;
}
// undefined, init, ppop, predicate and for instruction in control



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



