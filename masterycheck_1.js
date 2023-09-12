// Mastery Check 1
// Scope, Higher Order Function, Substitution Model and Recursive/Iterative Process

// Recursive vs Iterative Process
// Example of Recursion Process
function factorial(n) {
    return n <= 1
           ? 1
           : n * factorial(n - 1);
}

factorial(5);

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

factorial_iter(5);

/*
The above function gives rise to a recursive process because it does not have 
deferred operation.

Using the substitution model, we can visualise the iterative process:
factorial_iter(5);
fact_iter(1, 1, 5);
fact_iter(1 * 1, 1 + 1, 5); => fact_iter(1, 2, 5);
fact_iter(1* 2)
*/

