// Sorting and Symbolic Processing

// Binary Search and Binary Search Trees
/*
const N = 100;

function guess_secret_num(start, end) {
    if (start === end) {
        return start;
    } else {
        const guess = math_floor((start + end) / 2);
        const check = check_guess(guess);
        return check === "correct"
              ? guess
              : check === "too low"
              ? guess_secret_num(guess + 1, end)    // when too low
              : guess_secret_num(start, guess - 1); // when too high
    }
}

guess_secret_num(1, N);
*/

// Runtime for such a search algorithm is...
// At each step, we cut the search space in half
// If problem size is N = 2^k, we get to size 1 after k steps
// Runtime: O(log(N))

// In order for binary search to work, the entries need to have some properties
    // A total order exists, tweo entries can be compared, either "equal", or one
    // is "smaller" or "larger"

// Efficiency
    // Need to reach each "middle" entry in O(1) time, else no advantage gained
    // May need a special data structure
    
// Special data structure: Binary Tree, is the empty tree or it has 
    // an entry
    // a left branch, or left subtree
    // a right branch, or right subtree

// Binary Search Tree is a binary tree where
    // all entries in the left subtree are smaller than the entry
    // all entries in the right subtree are larger than the entry
    // an abstraction for binary search
    
    
// Sorting, which allows us to have efficient search algorithms
    // A list xs of elements from a given universe X, and a total order on X
    // We should get a permutation of xs such that each element is greater than 
    // or equal to the previous one, wrt the total order
    // Only comparisons allowed
    
// Insertion Sort (sort tail, insert head into right place)
function insertion_sort(xs) {
    function insert(x, xs) {
        return is_null(xs)
               ? list(x)       // if list is empty, just add x into a list
               : x <= head(xs)
               ? pair(x, xs)   // if x is less than head(xs), x is the first element
               : pair(head(xs), insert(x, tail(xs)));
    }
    
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}


insertion_sort(list(1, 4, 6, 5, 7, 2, 3));

// Order of Growth in Time? O(n^2)

// Selection Sort (find smallest element x and remove it from the list, 
// sort the remaining list and put x in front)
function selection_sort(xs) {
    function smallest(xs) {
        // Compare x with the smallest value of y, base case is head(xs) 
        return accumulate((x, y) => x < y ? x : y, head(xs), tail(xs));
    }
    
    if (is_null(xs)) {
        return xs;
    } else {
        const x = smallest(xs);
        return pair(x, selection_sort(remove(x, xs)));
    }
}

// Order of Growth in Time? O(n^2)

// Merge Sort (divide into 2 parts, sort both sides individually)
function merge_sort(xs) {
    function merge(xs, ys) { // merge the 2 lists by comparing the head of the lists
        if (is_null(xs)) {
            return ys;
        } else if(is_null(ys)) {
            return xs;
        } else {
            const x = head(xs);
            const y = head(ys);
            return x <= y
                   ? pair(x, merge(tail(xs), ys))
                   : pair(y, merge(xs, tail(ys)));
        }
    }
    
    // put the first n elements of xs into a list
    function take(xs, n) {
        // ???
    }
    // drop the first n elements from the list
    // and return the rest
    function drop(xs, n) {
        // ???
    }
    
    function middle(n) {
        return math_floor(n / 2);
    }
    
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)),
                     merge_sort(drop(xs, mid)));
    }
}

// Order of Growth in Time?


// Symbolic Processing (Evaluation and Differentiation)
// Representing functions directly using function declarations or lambda expressions
function f(x) {
    return x * x + x + 4;
}

// How do we get the derivative?
// Simplest method, gives an approximation;
function deriv_numeric(f) {
    const dx = 0.0001;
    return x => (f(x + dx) - f(x)) / dx;
}

// This seems "good enough", but we want higher accuracy
// How could we represent our functions/expressions with data structures?

// A lot of wishful thinking here
function eval_symbolic(exp, name, val) {
    return is_number(exp) // if expression is a number
           ? exp
           : is_variable(exp) // if expression is a variable
           ? (is_same_variable(exp, name) ? val : NaN)
           : is_sum(exp)
           ? eval_symbolic(addend(exp), name, val) + // first argument of make_sum
               eval_symbolic(augend(exp), name, val) // second argument of make_sum
           : is_product(exp)
           ? eval_symbolic(multiplier(exp), name, val) * // first argument of make_product
               eval_symbolic(multiplicand(exp), name, val) // second argument of make_product
           : error(exp, "unknown expression type");
}


function deriv_symbolic(exp, x) {
    return is_number(exp)     // dx(constant) = 0
           ? 0
           : is_variable(exp)
           ? (is_same_variable(exp, x) ? 1 : 0)  // dx/dx = 1
           : is_sum(exp)                         // d(u + v)/dx = du/dx + dv/dx
           ? make_sum(deriv_symbolic(addend(exp), x),  
                      deriv_symbolic(augend(exp), x)) 
           : is_product(exp)
           ? make_sum(make_product(multiplier(exp),
                          deriv_symbolic(multiplicand(exp), x)),
                      make_product(multiplicand(exp),
                          deriv_symbolic(multiplier(exp), x)))
           : error(exp, "unknown expression type");
}


// Constructors
function make_sum(a1, a2) {
    return list("+", a1, a2);
}

function make_product(m1, m2) {
    return list("*", m1, m2);
}

// Accessors / Selectors
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
    return head(tail(tail(s))); // can use list_ref
}

// Predicates
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


// my_exp represents x * x + x + 4
// Symbolic representaion
const my_exp = make_sum(make_product("x", "x"), make_sum("x", "4"));


eval_symbolic(my_exp, "x", 3); // x = 3, evaluate it, returns 16

// // Symbolic differentiation
const my_deriv = deriv_symbolic(my_exp, "x"); // return make_sum(make_product("x", 2), 1)
eval_symbolic(my_deriv, "x", 3); // returns 7






















