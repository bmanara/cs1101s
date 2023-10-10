// /*
// // Limitations of Substitution Model
// // The need for state

// Our computation has been functional, given some argument, function always
// returns same result
// Memoryless/stateless, each function call is independent of the past.

// For our program to remember something about the past, it has state.
// We need to introduce state using assignment.
// */

// let distance = 100; // let introduces variable

// distance = 80; // assignment statement changes variable

// distance = distance - 30; // variable access in assignment

// // The above code would not have worked when using const, as the name suggests

// // Data structure can change as well
// const speed = pair(2.5, 4.0); // vector in 2D

// set_head(speed, 5.0); // change head to 5.0

// // Interestingly, we still use const, because we are changing the component of
// // pair, even though its a constant that refers to the pair. But we cannot change
// // the constant directly.

// // Iterative Processes are awkward... instead using while loops
// function factorial(n) {
//     let i = 1;
//     let result = 1;
//     while(1 <= n) {
//         result = result * i;
//         i = i + 1;
//     }
//     return result;
// }

// // Our substitution model does not work anymore. Our variables are changing
// // constantly, so we can't just replace the constant names with its value.
// // But assignment considers a variable as a "container" the holds a value.
// // The container contents may change over time, maintained in environment.


// // CSE Machine: Introducing State
// let x = 20;
// let y = 20;
// const c = 30;
// x = 5;
// y = x;
// y = 3;
// x = c; 

// /*
// // Declaration and Assignments in CSE Machine
// Declarations reserve space in program frame
// - Constant declarations are indicated by :=
// - Variable declarations are indicated by :
// */

// // Order of evaluation matters now
// let x = 1;
// function f() {
//     x = x + 1;
//     return 0;
// }

// f() + x; // Evaluating f() or x first will give us a different value.
// // CSE machine explicitly prescribes the order of evaluation.
// // We can see the order being implemented in the control and stash.

// // Why do declarations give undefined?
// // Declarations are non-value producing statements
// // If a program does not produce a value, the result is undefined.

// 2 * 4;
// const x = 1; // Run in CDE with Control and Stash


// // Control Statement
// // Sequences, consider...
// 2 + 3;
// 4 / 5; 
// 6 * 7; // returns 42
// // Running the program, we see that the first 2 results in the stash is POP.

// // Expression statements are value-producing, pop eliminates their value from 
// // stash, but the last result is not popped. 

// // Conditional Expressions
// const x = true;
// x ? 1 + 2 : 3 * 4; 

// // Conditionals evaluates predicate and then branch, boolean result appears in 
// // stash. Branch pops boolean value and decides which to execute.
// // Conditional statements are evaluated similarly, and are alsoe value producing.

// // Logicat Statements
// const y = false;
// x && y; // abbreviation of a conditional statement x ? y : false;
// x || y; // abbreviation of a conditional statement x ? true : y;

// // Assignment is also value producing, the result is not popped out of stash.
// // This means that we can use a chain of assignment, since our value is in stash.

// // while loops
// let i = 0;
// while (i < 1) {
//     i = i + 1; // value producing, result is the last execution of the body
// }

// // The while loop pushes undefined into the stash, hence if it doesn't run, 
// // the result produces is undefined. 

// for loops
const n = 5;
let result = 1;
for (let i = 1; i <= n; i = i + 1) {
    result = result * i;
}

/*
Assignment gives us the ability to create mutable data, we've been working with 
immutable data

Mutators
Now, we change change the head of a pair using set_head, similarly, set_tail
Changes our pointer at the head/tail of the pair to point to another value.
Because of how our pointers work, changing one variable COULD change another.
IF a copy was not made, and our pointer just points to the variable that is being
changed, it affects our data structures.

We can also now create cyclical structures in our list. Good/Bad thing.

Mutable ("Destructive") List Processing
- A function to append two lists and return the result list
    - No new pair must be created
*/

function d_append(xs, ys) {
    if(is_null(xs)) {
        return ys;
    } else {
        set_tail(xs, d_append(tail(xs), ys));
        return xs;
    }
    
}

function d_map(f, xs) {
    if(!is_null(xs)) {
        set_head(xs, f(head(xs)));
        d_map(f, tail(xs));
    } else {
    //   Do nothing
    }
}

const xs = list(1, 2, 3);
d_map(x => x + 1, xs);
xs;














