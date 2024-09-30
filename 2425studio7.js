// Streams
/*
const s1 = null; // empty stream

const s2 = pair(1, () => null); // stream with element 1

const s3 = pair(1, 
                () => pair(2, 
                           () => pair(3, null))); // stream with element 1, 2, 3
                           
// Infinite Streams

function ones_stream() {
    return pair(1, ones_stream);
}

// Finite Stream
function enum_stream(low, hi) {
    return low > hi
        ? null
        : pair(low, () => enum_stream(low + 1, hi));
}

const ones = ones_stream(); // stream with 1s
const s_enum = enum_stream(1, 100); // stream from 1 to 100

// Convenient Functions to have
function stream_tail(stream) {
    return tail(stream)(); // takes the tail, calls the function at tail
}

function stream_ref(s, n) {
    return n === 0 
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
               () => stream_map(f, stream_tail(s)));
}

function stream_filter(p, s) {
    return is_null(s)
        ? null
        : p(head(s)) // predicate
            ? pair(head(s), // if true, add head to stream
                   () => stream_filter(p, stream_tail(s)))
            : stream_filter(p, stream_tail(s)); // keep going until we get a true
}



head(stream_tail(ones));
head(stream_tail(s3));
*/

// Midterm Questions
(f => f(f))
    (make_factorial => n => (n === 0) ? 1 : n * (make_factorial(make_factorial))(n - 1))(5);


/*
// Symbolic Processing
// Example given in Lecture

function is_variable(x) {
    return is_string(x);
}

function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2;
}

function is_sum(x) {
    return is_pair(x) && head(x) === "+";
}

function is_product(x) {
    return is_pair(x) && head(x) === "*";
}

function addend(s) {
    return head(tail(s));
}

function augend(s) {
    return head(tail(tail(s)));
}

function multiplier(s) {
    return head(tail(s));
}

function multiplicand(s) {
    return head(tail(tail(s)));
}

function number_equal(exp, num) {
    return is_number(exp) && exp === num;
}

function make_sum(a1, a2) {
    return number_equal(a1, 0)
           ? a2
           : number_equal(a2, 0)
           ? a1
           : is_number(a1) && is_number(a2)
           ? a1 + a2
           : list("+", a1, a2);
}

function make_product(m1, m2) {
    return number_equal(m1, 0) || number_equal(m2, 0)
           ? 0
           : number_equal(m1, 1)
           ? m2
           : number_equal(m2, 1)
           ? m1
           : is_number(m1) && is_number(m2)
           ? m1 * m2
           : list("*", m1, m2);
}

function deriv_symbolic(exp, variable) {
    return is_number(exp)
           ? 0
           : is_variable(exp)
           ? (is_same_variable(exp, variable)) ? 1 : 0
           : is_sum(exp)
           ? make_sum(deriv_symbolic(addend(exp), variable),
                      deriv_symbolic(augend(exp), variable))
           : is_product(exp)
           ? make_sum(make_product(multiplier(exp),
                                   deriv_symbolic(multiplicand(exp),
                                                  variable)),
                      make_product(deriv_symbolic(multiplier(exp),
                                                  variable),
                                   multiplicand(exp)))
           : error(exp, "unknown expression type");
}

// x^2 + x + 4
const exp1 = make_sum(make_product("x", "x"), make_sum("x", 4));

// 3 * x^2 + 4 * x + 5
const exp2 = make_sum(make_product(3, make_product("x", "x")),
                      make_sum(make_product(4, "x"), 5));

// x * y * (x + 3)
const exp3 = make_product(make_product("x", "y"),
                          make_sum("x", 3));

display_list(deriv_symbolic(exp1, "x"));
display_list(deriv_symbolic(exp2, "x"));
display_list(deriv_symbolic(exp3, "x"));
*/