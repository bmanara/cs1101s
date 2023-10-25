// Streams II
// stream_ref aims to reference and return the element based on index passed
function stream_ref(s, n) {
    return n === 0
           ? head(s)
           : stream_ref(stream_tail(s), n - 1);
}


/*
Important to understand how to use the STREAMS pre-declared functions.
Especially how stream_filter, stream_map, stream_tail etc. really works,
are they truly lazy? or just partially lazy?
*/

// replace aims to create a new stream by replacing in a given stream a 
// particular value by another value
function replace(s, a, b) {
    return is_null(s)
           ? null 
           : pair((head(s) === a ? b : head(s)), 
                  () => replace(stream_tail(s), a, b)); // returning a stream!
}

// list_to_inf_stream aims to take a list, and return a stream that repeats the 
// list infinitely
function list_to_inf_stream(xs) {
    function helper(ys) {
        return is_null(ys)
               ? helper(xs)
               : pair(head(ys), () => helper(tail(ys)));
    }
    return is_null(xs) ? null : helper(xs);
}

/*
Why do we need streams? It allows us to represent infinite steams, to use 
sequence manipulation (map, filter...), while keeping the efficiency of 
incremental computation
Video/Audio Streaming uses this, processes and plays on-the-fly without 
entire file available.
Stream editing, process a file as a stream (e.g find and replace text using AWK)
*/

// Wrapping around
function ones_stream() {
    return pair(1, ones_stream);
}
// conse ones = ones_stream();

const ones = pair(1, () => ones);

// head(stream_tail(ones));

// In the first example, we are constantly making new pairs
// In the second, we are only referencing back to our original pair, hence
// avoids making unnecessary pairs

const rep123 = pair(1, () => pair(2, () => pair(3, () => rep123)));

// add_streams aims to take two streams that contains the element wise sums
// Note: streams passed need not be equal length
function add_streams(s1, s2) {
    return is_null(s1)
           ? s2
           : is_null(s2)
           ? s1
           : pair(head(s1) + head(s2), () => add_streams(stream_tail(s1), 
                                                         stream_tail(s2)));
}

const fib3 = pair(0, () => pair(1, () => add_streams(stream_tail(fib3), 
                                                      fib3)));
// L10 Slide 38 does a good job explaining what happens above. JIT
const integers = pair(1, () => add_streams(ones, integers));
eval_stream(integers, 2);
// eval_stream(integers, 5);

// Memoized Streams
// Input fun, returns a memoized version of fun, mfun
function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    
    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    
    return mfun;
}

function ms(m, s) {
    display(m);
    return s;
}

// Non-memoized
const onesA = pair(1, () => ms("A", onesA));
// stream_ref(onesA, 3);

// Memoized
const onesB = pair(1, memo_fun(() => ms("B", onesB)));
// stream_ref(onesB, 3);
// stream_ref(onesB, 5);

// Notice that onesA displays 3"A", while onesB display only 1"B". 
// This is because our memoized version does not call the function 3 times,
// and instead just returns the value 1 back to us.

function m_integers_from(n) {
    return pair(n, memo_fun(() => ms("M: " + stringify(n),
                                     m_integers_from(n + 1))));
}

const m_integers = m_integers_from(1);
stream_ref(m_integers, 0);
stream_ref(m_integers, 1);
stream_ref(m_integers, 2);
stream_ref(m_integers, 5);
stream_ref(m_integers, 5);
// The memoized function saves the result as m_integers_from(n + 1)
// This explains why we dont get duplicate calls even though we called 
// stream_ref multiple times with different m values

/* Do we always want to do this?
No. It depends on a few things. 
Nature of functions, functions often have an effect, beyond the value they are 
computing
Side effects, do we want the side effects to occur? Such as display()?
Pure functional programming: without side effects
    - All values can be memoized
*/




