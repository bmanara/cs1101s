// Substitution Model for Function Application (Calling of Function)
// Use stepper to step through and understand

const cost_per_meter = 199.95; // Goes through constant and replaces all constants in program to its value*

function circumference(radius) {
    return 2 * math_PI * radius;
}

function cost_of_circular_handrail(r) {
    return cost_per_meter * circumference(r);
}

cost_of_circular_handrail(2.1); // Substitutes function call with the body of our function

/*
Applicative Order vs Normal Order
Applicative Order: Evaluates arguments first, before substituting values for the function (use stepper to see)
Normal Order: Substitutes the values to the arguments first, 
              before evaluating the whole expression involving only operators and primitive functions
Primitive & Compound Functions
*/

function sq(x) {
    return x * x;
}

function sum_of_sqs(x, y) {
    return sq(x) + sq (y);
}

function f(a) {
    return sum_of_sqs(a + 1, a * 2);
}

f(5);

// stack_frac
import { sail, heart, stack, stackn, stack_frac, show } from "rune";

show(stack_frac(1/4, heart, sail));

show(stack_frac(1/3, heart, stack_frac(1/2, heart, heart))); // stackn(3, heart)


// Recursion
/*
Think about the solution for n, assuming n - 1, first, return stack_frac(1 / n, rune, stack_n(n - 1, rune));
Then, think about the trivial base case, n === 1
Recursive Functions, functions that calls itself
Recursive Process have deffered operations
*/

function stack_n(n, rune) {
    return n === 1 ? rune : stack_frac(1 / n, rune, stack_n(n - 1, rune));
}

show(stack_n(5, heart));

// repeat_pattern will call the pattern n times, to the init
// repeat_pattern(0, square, 2) returns 2

/*
function repeat_pattern(n, pattern, init) {
    return n === 1 ? init : pattern(repeat_pattern(n - 1, pattern, init));
}

repeat_pattern(3, sq, 2);
*/

// Factorial Function
function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1);
}

factorial(6);

// Iteration
// Iterative Functions does not have deferred operations (good for resources management)

function repeat_pattern(n, pattern, init) {
    return n === 0 ? init : repeat_pattern(n - 1, pattern, pattern(init));
}

repeat_pattern(2, sq, 2);


// Now factorial_iter is basically a helper function
// iter keeps track of the counter, n and our running value as well
// In order to achieve iteration, our running value must be saved in our function calls
function factorial_iter(n) {
    return iter(1, 1, n);
}

function iter(product, counter, n) {
    return counter > n ? product : iter(product * counter, counter + 1, n);
}

factorial_iter(5);

// Fibonacci Sequence 
// Recursive grows into tree recursion
function fibonacci(n) {
    return n <= 1 
           ? n 
           : fibonacci(n - 1) + fibonacci(n - 2);
}

// Iterative Function
// Useful to know what the function needs to know before calculating
// For fib, it needs to only keep the value n - 1 and n - 2 to calculate n.
function fibonacci_iter(n) {
    return f_iter(0, 1, n);
}

function f_iter(first, second, counter) {
    return counter === 1
           ? second
           : f_iter(second, first + second, counter - 1);
}

fibonacci_iter(5);

// Simplified Iterative Function
function f(x, y) {
    return x === 0 ? y : f(x - 1, y + 1);
}

// Simplified Recursive Function 
function g(x) {
    return x === 0 ? 0 : 1 + g(x - 1);
}

// If the recursive call is the last thing done, it is an iterative process 
// as there is no deferred processes

/*
Orders of Growth
Time and Space, how long does the program run, how much memory do we need?
Only interested in a rough measure of resources used by a computational process,
with respect to the problem size

"Order of Growth" is an abstraction technique, therefore details such as actual
runtime, programming language, or styles are deemed irrelevant

For factorial(n),
Number of operations grows linearly proportional to n
Therefore the function runs in a time (linearly) proportional to the argument n. Θ(n)
Number of deferred operations grows linearly proportional to n
Therefore the function has a space requirement (linearly) proportional to the argument n

For fibonacci(n),
Time for exploring the tree grows with the size of tree
Therefore, the function runs in a time exponentially proportional to the argument n. Θ(Φ^n)
Number of deferred operations however still grows linearly proportional to n 
Therefore the function has a space requirement (linearly) proportional to the argument n
*/

/*
O(n^2 + n + 1) = O(n^2)
O(2n + e) = O(n)
O(2^(2n)) = O(2^(2n)) // We cannot just equal it to O(2^n)



