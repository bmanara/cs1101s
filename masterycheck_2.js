// Mastery Check 1
// Environmental Model, Memoization and Streams

// Environmental Model





// Memoization
/*
Function records what was already caclulated, and stores it into a "local table"
We represent this local table as an array. 
Whenever the function is called, it checks to see whether it has evaluated 
the same function callwith the same arguments. If it has, instead of 
re-evaluatiing it again, it will take the result from the array and return it.
Having such an implementation can greatly reduce our runtime, especially if
we are constantly calling the same function with the same arguments.
*/

// function fib(n) {
//     let mem = [0, 1];   // base values fin(0) = 0 and fib(1) = 1;
    
//     function m_fib(n) {
//         if (mem[n] !== undefined) {
//             display(mem);
//             return mem[n];
//         } else {
//             const result = m_fib(n - 1) + m_fib(n - 2);
//             mem[n] = result;
//             return result;
//         }
//     }
    
//     return m_fib(n);
// }

// fib(6); // 8
// fib(7); // 13
// fib(8); // 21

/*
In the above iteration, though we have implemented a more efficient function,
everytime we call fib again, we reset our mem to [0, 1]... Causing our program
to evaluate each and every function call again. We can fix this by...
*/

function memoize(f) {
    const mem = [];     
    
    function mf(x) {
        if (mem[x] !== undefined) {
            display(mem);
            return mem[x];
        } else {
            const result = f(x);
            mem[x] = result;
            return result;
        }
    }
    return mf;
}

const m_fib2 = memoize(n => n <= 0
                            ? 0
                            : n === 1
                            ? 1 
                            : m_fib2(n - 1) + m_fib2(n - 2)); 
                            
m_fib2(6); // 8
m_fib2(7); // 13
m_fib2(8); // 21
           
/*                 
Our function memoize essentially creates a new frame, with binding mem.
Whenever we call m_fib2, we will look up the memory in this frame, as our
function is declared in that frame.

Any program that requires continuous function calls with the same arguments
can use memoization, but this is assuming we expect our functions to always
return the same result (functions behaviour only changes with different input)
*/

// Streams



