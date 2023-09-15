// Refinement of List Discipline
// A list of a certain data type is null or a pair whose head is of that data type
// and whose tail is a list of that data type

// a list of numbers
const listA = pair(1, pair(2, null));

// a list of booleans
const listB = list(true, true, false, true);

// a list of strings
const listC = list("hello", "world", "!");

// list of any type
const listD = null;

// Appending two lists 
// We could loop through the first list, while doing so, create a new list using
// pairs, to "duplicate" first list. Once we reach the end of the first list, 
// we pair up the end with the second list, instead of null

function append(xs, ys) {
    return is_null(xs) 
          ? ys
          : pair(head(xs), append(tail(xs), ys));
}

// Recursive Process O(n), n is the length input of xs, not ys.
// Order of growth in space O(n), deferred operations increase linearly with input of xs
// BUT, we also need memory to store our data (pairs), not just for our deferred 
// operations, though it is still O(2n) = O(n)


// Reversing two lists

function reverse(xs) {
    return is_null(xs)
           ? null
           : append(reverse(tail(xs)), list(head(xs))); // append expects 2 lists
}

// Recursive Process O(n^2), because both reverse and append takes O(n)...


function reverse_iter(xs) {
    function rev(original, reversed) {
        return is_null(original)
               ? reversed
               : rev(tail(original), pair(head(original), reversed));
    }
    
    return rev(xs, null);
}

// Iterative Process O(n) for time
// With the inclusion of mememory allocation for data structures, O(n) for space

draw_data(reverse_iter(listA));


// Scaling a list
function scale_list(xs, k) {
    return is_null(xs)
           ? null 
           : pair(k * head(xs), scale_list(tail(xs), k));
}

scale_list(listA, 5);


// Squaring a list
function square_list(xs) {
    const square = x => x * x;
    return is_null(xs)
           ? null 
           : pair(square(head(xs)), square_list(tail(xs)));
}


// Mapping: applying a given function f element-wise to a given list xs
// Returns a list containing the results of applying f to each element of xs

function map(f, xs) {
    return is_null(xs)
           ? null 
           : pair(f(head(xs)), map(f, tail(xs)));
}

// Using our map, we can do a lot of things
function copy(xs) {
    return map(x => x, xs);
}


// Taking even numbers from a list
function even_numbers(xs) {
    return is_null(xs)
           ? null 
           : head(xs) % 2 === 0
           ? pair(head(xs), even_numbers(tail(xs)))
           : even_numbers(tail(xs));
}

// Filter: which elements to keep in a list?
// Takes in 2 arguments, a function that returns true/false, and a list
function filter(pred, xs) {
    return is_null(xs)
           ? null 
           : pred(head(xs))
           ? pair(head(xs), filter(pred, tail(xs)))
           : filter(pred, tail(xs));
}

// Using our filter, we can do a lot of things
function odd_numbers(xs) {
    return filter(x => x % 2 !== 0, xs);
}

// Summing elements of a list
function list_sum(xs) {
    return is_null(xs)
           ? 0
           : head(xs) + list_sum(tail(xs));
}

// Accumulate: ANOTHER ABSTRACTION WOOOOOOOOOO
function accumulate(operation, initial, xs) {
    return is_null(xs)
           ? initial
           : operation(head(xs), accumulate(operation, initial, tail(xs)));
}

// Using our accumulate, we can do a lot of things
function list_product(xs) {
    return accumulate((x, y) => x * y, 1, xs);
}


/*
Trees and Tree Processing
A tree of a certain type (not including null or pairs) is a list whose 
elements are of that data type, or trees of that data type

A tree of a certain data type is 
- either null
- or a pair
    - whose tail is a tree of that data type and
    - whose head is 
        - either of that data type
        - or a tree of that data type
*/

// tree of numbers
const treeA = list(1, 2, 3, 4);
const treeB = list(list(1, 2), list(3, 4));

const treeC = null; // can be a tree of any type

// Counting data items in a tree
function count_data_items(tree) {
    return is_null(tree)
           ? 0
           : (is_list(head(tree))
              ? count_data_items(head(tree))
              : 1)
              +
              count_data_items(tail(tree));
}

// Scaling a tree
function scale_tree(tree, k) {
    return map(sub_tree => 
                    !is_list(sub_tree)
                    ? k * sub_tree
                    : scale_tree(sub_tree, k),
               tree);
}




/*
// Brief 5
T-Diagrams, diagrams to show how our processor is running our program
"Program" Overwatch (x86-64 code) >> x86-64 Processor
"Program" Instagram (A17 build) >> A17 Pro 


// Intepreters
We are not going to write different programs for different processors, so what do we do?
Our interpreters is a program that executes another program. 

The intepreter's
source language is the language in which the interpreter is written,
target language is the language in which the programs are written which the 
interpreter can execute

We represent this as a square with "JavaScript / x86-64" in T-diagram, 
seen as an intepreter for JavaScript, written in x86-64 machine code.

Can be used for hardware emulation, and intepreters can work together.


// Compilers
Instead of always running the conde and interpreting it, we can compile our
code to another language. 
A compiler is a program that tranlates from one language to another.

Represented with a t-shape block "TypeScript --> JavaScript / x86-64"
TypeScript to JavaScript compiler written in x86-64 machine code



*/



































