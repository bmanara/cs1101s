/*
// Limitations of Substitution Model
// The need for state

Our computation has been functional, given some argument, function always
returns same result
Memoryless/stateless, each function call is independent of the past.

For our program to remember something about the past, it has state.
We need to introduce state using assignment.
*/

let distance = 100; // let introduces variable

distance = 80; // assignment statement changes variable

distance = distance - 30; // variable access in assignment

// The above code would not have worked when using const, as the name suggests

// Data structure can change as well
const speed = pair(2.5, 4.0); // vector in 2D

set_head(speed, 5.0); // change head to 5.0

// Interestingly, we still use const, because we are changing the component of
// pair, even though its a constant that refers to the pair. But we cannot change
// the constant directly.

// Iterative Processes are awkward... instead using while loops
function factorial(n) {
    let i = 1;
    let result = 1;
    while(1 <= n) {
        result = result * i;
        i = i + 1;
    }
    return result;
}

// Our substitution model does not work anymore. Our variables are changing
// constantly, so we can't just replace the constant names with its value.
// But assignment considers a variable as a "container" the holds a value.
// The container contents may change over time, maintained in environment.


// CSE Machine: Introducing State
let x = 20;
let y = 20;
const c = 30;
x = 5;
y = x;
y = 3;
x = c; 

/*
// Declaration and Assignments in CSE Machine
Declarations reserve space in program frame
- Constant declarations are indicated by :=
- Variable declarations are indicated by :
*/

// Order of evaluation matters now
let x = 1;
function f() {
    x = x + 1;
    return 0;
}

f() + x; // Evaluating f() or x first will give us a different value.
// CSE machine explicitly prescribes the order of evaluation.
// We can see the order being implemented in the control and stash.

// Why do declarations give undefined?
// Declarations are non-value producing statements
// If a program does not produce a value, the result is undefined.

2 * 4;
const x = 1; // Run in CDE with Control and Stash

/*
Control tracks deferred operations, expressions and assignment, 
Stash stores immediate results and values,
Environment provides locations for storing values for names, and where the 
change occurs
An environment determines the context in which an expression should be evlauated.
*/

// Control Statement
// Sequences, consider...
2 + 3;
4 / 5; 
6 * 7; // returns 42
// Running the program, we see that the first 2 results in the stash is POP.

// Expression statements are value-producing, pop eliminates their value from 
// stash, but the last result is not popped. 

// Conditional Expressions
const x = true;
x ? 1 + 2 : 3 * 4; 

// Conditionals evaluates predicate and then branch, boolean result appears in 
// stash. Branch pops boolean value and decides which to execute.
// Conditional statements are evaluated similarly, and are alsoe value producing.

// Logicat Statements
const y = false;
x && y; // abbreviation of a conditional statement x ? y : false;
x || y; // abbreviation of a conditional statement x ? true : y;

// Assignment is also value producing, the result is not popped out of stash.
// This means that we can use a chain of assignment, since our value is in stash.

// while loops
let i = 0;
while (i < 1) {
    i = i + 1; // value producing, result is the last execution of the body
}

// The while loop pushes undefined into the stash, hence if it doesn't run, 
// the result produces is undefined. 

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

/*
Blocks in CSE Machine
How does our CSE keep track of different x?
An environment can be described as a sequence of frames.
To evaluate a name, look up its value in the current value. If not found, 
look in the enclosing environment, and so on.

Global environment
Consists of a single frame with bindings of primitive and pre-declared functions
and constants. 

Evaluating Blocks
Evaluating a block { statements } extends the current environment by adding a 
new frame. New frame contans bindings of the constants and variables declared in the block.

User program is considered in an implicit program block.
Program evaluation directly extends the global environment.
Resulting environment is called the program environment.
*/

let x = 3;                  // Program env has binding of x: 3

{
    const x = 5;            // New frame is created here, and we will find 
    let x = 8;              // bindings of x:= 5 and y: 8
}


/*
Functions in CSE Machine
Every function application extends the environment in which the function was created.
The new frame contains bindings of parameters to arguments, not created if no parameters
*/

// Lambda Expression
// (var1, var2, ...) => { body }
// A function remembers the environment in which it was created.

const square = x => x * x;
square(5);

// Function application
// Evaluates the subexpressions in the current environment 
// Creates a new frame that points to the environment of the function, binding
// the parameters to the arguments. Parameters are variables, assignment allowed

const x = 1;
const square = x => x * x;
square(5);
x + 2;

function cube(x) {
    const y = x * x * x;
    return y;
}

cube(3);

// Recursive factorial function
function factorial(n) {
    return n <= 1
           ? 1
           : factorial(n - 1) * n;
}

factorial(2);

// Premature return statement
// Empties the control to make sure it returns correctly? Stops at "mark"
function abs(x) {
    if (x >= 0) {
        return x;
    }
    return -x;
}

abs(5);

// Update example
function update(x) {
    x = x + 1;
}

let y = 2;
update(y);
y;        // returns 2

/* 
// Stateful Data and Identity
With the update example, it did not update our y value as x is binded in another
environment. 
However, if we were to do the same with pairs, because our reference to pairs 
points to our pair, it would actually change our pair.
To check whether our 2 references are sharing the same pair, a === b.
It checks whether they are referring to the same location in memory. POINTERS!
For a === b, "is a identical to b"
true, false, null, undefined are identical to itself
Numbers and Strings are identical as we would expect it to be

Functions are made by function expressions, and their creation bestowns an 
identity upon them
*/

