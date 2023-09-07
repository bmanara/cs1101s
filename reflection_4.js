// Data Abstraction
// Types of Values in Source: Numbers, Boolean, Strings, Functions, imported values

// Pairs and Empty Lists

// Pairs: Constructed using tuple notation, eg. (0.5, 0.25)
/*
function pair(x, y) {
    return component => component === 0 ? x : y;
}

function head(p) {
    return p(0);
}

function tail(p) {
    return p(1);
}
*/

// const pair = (x, y) => f => f(x, y);

// const head = p => p((x, y) => x); // Provide a lambda function to the pair which 
// const tail = p => p((x, y) => y); // takes out first or second data point
// Above functions are commented out as pair, head and tail is already pre declared in Source 2

// Construct
const p = pair(0.5, 0.25);

// Select
const x = head(p);
const y = tail(p);

/*
Case Study on Data Abstraction: Rational Numbers
A library hiding the internal representation of the data
Implementation details are hidden, providing a higher-level abstraction
A pair, consisting of a denominator and a numerator
*/
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); // Compute GCD of 2 numbers using Euclid's Algorithm
}

// Constructors and Selector Functions
function make_rat(n, d) {
    const g = gcd(n, d); // Simplify rational numbers
    return pair(n / g, d / g);
}

function numer(x) {
    return head(x);
}

function denom(x) {
    return tail(x);
}

// Addition and Subtraction of Rational Numbers
function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
                    denom(x) * denom(y));
}

function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
                    denom(x) * denom(y));
}

// Multiplication and Division of Rational Numbers
function mul_rat(x, y) {
    return make_rat(numer(x) *  numer(y),
                    denom(x) * denom(y)); 
}

function div_rat(x, y) {
    return make_rat(numer(x) * denom(y),
                    denom(x) * numer(y));
}

// Equality of Rational Numbers
function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x);
}

// Printing Rational Numbers
function rat_to_string(x) {
    return stringify(numer(x)) + " / " + stringify(denom(x));
}

// Displaying our Rational Numbers
const one_half = make_rat(1, 2);
const one_third = make_rat(1, 3);

// display(rat_to_string(add_rat(one_half, one_third)));
// display(rat_to_string(mul_rat(one_half, one_third)));
// display(rat_to_string(add_rat(one_third, one_third)));

// Making Lists with Pairs
/*
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 5 :
           kinds_of_coins === 2 ? 10 :
           kinds_of_coins === 3 ? 20 :
           kinds_of_coins === 4 ? 50 :
           kinds_of_coins === 5 ? 100 : 0;
}
*/

/* first_denomination is a data structure, stores five values and retrieves 
them when given the proper index.
Data Structures in Mathematics are everywhere, tuples, sets and matrices.
The simplest data structure of them all is a pair.
*/

// We need to nest the pairs together, but also be able to extract data out.
// There are different ways of representations, which will require different ways of retrieval.
// So, lets introduce some discipline:
// head(p) always has the data, tail(p) has the remaining elements
const first_denoms = pair(100, pair(50, pair(20, pair(10, pair(5, null))))); // null represents our empty list
head(first_denoms);
tail(first_denoms);

// List Discipline in Source
// List is either null or a pair whose tail is a list.
const my_list = null;
const your_list = pair(8, null);
const their_list = pair(8, pair(7, null));

// Varaidic Function list (accepts any number of arguments)
const first_denomination = list(100, 50, 20, 10, 5);

// Retrieving Data from a list
function retrieve_list(n, list) {
    if (is_null(list)) {
        return "ERROR";
    } else if (n === 0) {
        return head(list); 
    } else {
        return retrieve_list(n - 1, tail(list));
    }
}

// retrieve_list(0, first_denoms);

// Length of a List
// Definition: length of empty list is 0, and length of non-empty list is one more than the length of its tail
function length(xs) {
    return is_null(xs)
           ? 0
           : 1 + length(tail(xs));
}

function len_iter(xs) {
    function len(ys, count) {
        return is_null(ys)
               ? count
               : len(tail(ys), count + 1);
    }
    
    return len(xs, 0);
}

// Box Notation, pair(x, y) is printed as [x, y]
// Empty Lists printed as null

// List Notation, same as box notation, but any substructure that is a list is formatted
// display_list(x) shows x in list notation
display_list(
    pair(pair(pair(7, 8), pair(1, pair(2, null))), 
         6));
         
// Box and Pointer Diagrams are graphical representations of data structures made of pairs
draw_data(pair(1, pair(2, pair(3, null))));
draw_data(pair(0, list(1, 2)));

