// Function Application


const cost_per_meter = 199.95;

function circumference(radius) {
    return 2 * math_PI * radius;
}

function cost_of_circular_handrail(r) {   
    return cost_per_meter * circumference(r);
}

// cost_of_circular_handrail(2.1);


// Substitution Model

function square(x) {
    return x * x;
}

function sum_of_squares(x, y) {
    return square(x) + square(y);
}

function f(a) {
    return sum_of_squares(a + 1, 2 * a);
}

// f(5); 


// Recursion

// Recursive Process
function fib_recur(n) {
    return n <= 1
           ? n
           : fib_recur(n - 1) + fib_recur(n - 2);
}

// fib_recur(10);

// Iterative Process
function fib(n) {
    return fib_iter(1, 0, n);
}

function fib_iter(a, b, count) {
    return count <= 0
           ? b
           : fib_iter(a + b, a, count - 1);
}


// fib(10);

// Orders of Growth

/*
import { stack, beside, circle, blank, square,
         show, ribbon } from "rune";

function moony_1(rune) {
    return stack(beside(circle, blank),
                 beside(square, rune));
}

show(moony_1(ribbon));
*/
