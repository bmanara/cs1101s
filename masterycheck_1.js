// Mastery Check 1
// Scope, Higher Order Function, Substitution Model and Recursive/Iterative Process

// Recursive vs Iterative Process
// Example of Recursion Process
function factorial(n) {
    return n <= 1
           ? 1
           : n * factorial(n - 1);
}

/*
The above function gives rise to a recursive function because it has deferred
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
