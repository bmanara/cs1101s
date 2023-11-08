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

// Consider our fibonacci function, which used to have Θ(2^n), exponential runtime

function fib(n) {
    let mem = [0, 1];   // base values fin(0) = 0 and fib(1) = 1;
    
    function m_fib(n) {
        if (mem[n] !== undefined) {
            display(mem);
            return mem[n];
        } else {
            const result = m_fib(n - 1) + m_fib(n - 2);
            mem[n] = result;
            return result;
        }
    }
    
    return m_fib(n);
}

// fib(6); // 8
// fib(7); // 13
// fib(8); // 21

/*
In the above iteration, we have implemented a more efficient function
with runtime, Θ(n) instead. BUT, everytime we call fib again, we reset our 
mem to [0, 1]... Causing our program to evaluate each and every function call 
again. We can fix this by either storing mem outside of our function, 
as a global variable, or...
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
                            
// m_fib2(6); // 8
// m_fib2(7); // 13
// m_fib2(8); // 21
           
/*                 
Our function memoize essentially creates a new frame, with binding mem.
Whenever we call m_fib2, we will look up the memory in this frame, as our
function is declared in that frame.

Any program that requires continuous function calls with the same arguments
can use memoization, but this is assuming we expect our functions to always
return the same result (functions behaviour only changes with different input).
*/

// Streams
/*
Delayed/"Lazy" Lists, that contains a data item as head, but a function 
as a tail
The evaluation of the tail is delayed as it is a nullary lambda function.
We only call the nullary function if we need the next element, therefore making
it "lazy".
In order to access the next data item, we need to call the tail of the stream,
this is what stream_tail does.
*/

// Finite Streams
const s1 = null;
const s2 = pair(1, () => null);
const s3 = pair(1, () => pair(2, () => null));

function enum_stream(start, end) {
    return end < start
          ? null 
          : pair(start, () => enum_stream(start + 1, end));
}

// Infinite Streams
function from_n_integers(n) {
    return pair(n, () => from_n_integers(n + 1));
}

const integer_stream = from_n_integers(1);
// display(stream_ref(integer_stream, 0)); // 1
// display(stream_ref(integer_stream, 5)); // 6

const ones = pair(1, () => ones);  // stream of ones

/*
Not all functions in the Source 3 Documentation that supports stream processing etc,
are lazy. It depends on what we expect the function to do. stream_map and stream_filter
is lazy, stream_member and stream_ref is sort-of lazy, and stream_reverse and 
stream_to_list is not lazy at all.
Some functions will also fail when given an infinite stream, such as stream_length.

The above implementation suffices for streams to work the way we intended it to.
Lets assume we want to stream_map(x => x * 2, integer_stream);
If we were to continuously call stream_ref(map_integer_stream, 6), our program 
will always need to start from the 1st element of the stream, and force its way
to the 6th element before returning to me the data item at index 5. 
This means that it always calls x => x * 2 to every element when going through
the stream.
To further optimize this, we can use memoization.
*/

function stream_map(f, s) {
    display("running");
    return is_null(s)
           ? null 
           : pair(f(head(s)),
                  () => stream_map(f, stream_tail(s)));
}

const map_integer_stream = stream_map(x => x * 2, integer_stream);
// display(stream_ref(map_integer_stream, 6)); // 14
// display(stream_ref(map_integer_stream, 6)); // 14

function memo(f) {
    let already_run = false;
    let result = undefined;
    
    function memoized() {
        if (already_run) {
            return result;
        } else {
            result = f();
            already_run = true;
            return result;
        }   
    }
    
    return memoized;
}

function optimized_stream_map(f, s) {
    display("running");
    return is_null(s)
           ? null
           : pair(f(head(s)), 
                  memo(() => optimized_stream_map(f, stream_tail(s)))); 
}

const map_integer_stream2 = optimized_stream_map(x => x * 2, integer_stream);
// display(stream_ref(map_integer_stream2, 6)); // 14
// display(stream_ref(map_integer_stream2, 6)); // 14

/*
Though such an implementation seems to be extremely optimized, we do sacrifice
a little bit of space used. Also, we don't always want to memoize everything. 
What if our function running, we want the "side effects" to occur? Memoization
will only allow the "side effects" to run the first time, the function is run, 
afterwards, instead of running the function, it just returns the expected result. 
This is great only if we are using pure functional programming, 
    - without "side effects" 
    - functions always return the same result when given the same arguments
*/







