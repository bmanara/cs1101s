// Higher Order Functions

// Passing functions to functions
function f(g, x) {
    return g(g(x)); // return g(x);
}

function g(x) {
    return x + 5;
}

f(g, 2);

// Point out the difference between passing in g and passing in g(x)!

// Declaring functions inside a function
function sum(f, x, g, y) {
    return f(x) + g(y);
}

function f1(x, y) {
    function plus_two(x) {
        return x + 2;
    }
    
    function square(x) {
        return x * x;
    }
    
    return sum(plus_two, x, square, y);
}

f1(3, 4);

// Lambda Functions
function f2(x, y) {
  return sum(x => x + 2, x, x => x * x, y);  
}

f2(3, 4);

const square = x => x * x; 

// Returning new functions
function adder(x) {
    return y => y + x;
}

adder(3)(5);

// Scoping
// Use above examples to illustrate!