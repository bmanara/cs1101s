// Mastery Check 1
// Scope, Higher Order Function, Substitution Model and Recursive/Iterative Process

// Scope
// Example of Scope of Names
const x = 3;
const y = 1; 

function f(g) {
    const y = 10;
    return g(y);
}

f(x => x + y);

// Name declaration vs Name occurrence
// Forms of declaration includes 
// Pre declared names
math_PI;

// Constant Declaration
const constant = "hello";

// Parameters of function declarations and lambda functions
const lambda = (x, y) => x + y;

// Function name of function declarations
function f_name(x) {
    return x;
}

// Name occurrence refers to its closest surrounding declaration. 



// Higher Order Function
Function that takes in a function / returns a function 
Functions that manipulate functions

// Example of Higher Order Function
function f(g , x) {
	return g(x) ;
}

function g(y) {
	return y + 1 ;
}

f(g , 7); 

// Lambda expression 
Parameter => expression
const = (g, x) => g(x);
const = (y) => y+1;

// Abstraction

function transform_mosaic(p1, p2 , p3 , p4 , transform) {
	return transform(mosaic ( p1 , p2 , p3 , p4));
}




// Substitution Model

// Example of Applicative Order
// Evaluates the arguments first, before substituting the
// resulting argument into its parameters.

function square(x) {
    return x * x;
}

// square(1 + 1) + square(5 * 2);

/*
When calling the above function...
square(1 + 1) + square(5 * 2);
square(2) + square(5 * 2);
2 * 2 + square(5 * 2);
4 + square(5 * 2);
4 + square(10);
4 + 10 * 10;
4 + 100;
104;
Once the argument is evaluated, the function call goes through.
*/

// Example of Normal Order
// Does not evaluate the arguments first, instead it substitutes argument 
// expressions for parameters until it obtains an expression involving only 
// operators and primitive expressions.

// square(1 + 1) + square(5 * 2);
/*
When calling the above function...
square(1 + 1) + square(5 * 2);
((1 + 1) * (1 + 1)) + square(5 * 2);
((1 + 1) * (1 + 1)) + ((5 * 2) * (5 * 2));
(2 * 2) + (10 * 10);
4 + 100;
104
*/




// Recursive vs Iterative Process
// Example of Recursion Process
function factorial(n) {
    return n <= 1
           ? 1
           : n * factorial(n - 1);
}

// factorial(5);

/*
The above function gives rise to a recursive process because it has deferred
operations. 

Using the substitution model, we can visualise the recursive process:
factorial(5);
5 * factorial(4);
5 * (4 * factorial(3));
5 * (4 * (3 * factorial(2)));
5 * (4 * (3 * (2 * factorial(1))));
5 * (4 * (3 * (2 * (1))));
5 * (4 * (3 * 2));
5 * (4 * 6);
5 * 24;
120;

As shown above, we have deferred operations, with every line, there is an 
additional operation that the interpreter needs to keep track of. 
*/

// Example of iterative process
function factorial_iter(n) {
    function fact_iter(product, counter, max_count) {
        return counter > max_count
               ? product
               : fact_iter(product * counter, counter + 1, max_count);
    }
    
    return fact_iter(1, 1, n);
}

// factorial_iter(5);

/*
The above function gives rise to a recursive process because it does not have 
deferred operation.

Using the substitution model, we can visualise the iterative process:
factorial_iter(5);
fact_iter(1, 1, 5);
fact_iter(1 * 1, 1 + 1, 5); => fact_iter(1, 2, 5);
fact_iter(1 * 2, 2 + 1, 5); => fact_iter(2, 3, 5);
fact_iter(2 * 3, 3 + 1, 5); => fact_iter(6, 4, 5);
fact_iter(6 * 4, 4 + 1, 5); => fact_iter(24, 5, 5);
fact_iter(24 * 5, 5 + 1, 5) => fact_iter(120, 6, 5);
120;
*/

