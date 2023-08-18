const x = 3; // Constant Declaration

1 + 2; // Expression statement 

true ? 1 + 1 : 17; // Conditional Expressions

x > 0 ? x : -x; // Usage of comparison operators

x === 0 ? 1 : 2; 

// Nested Conditional Expression
// true ? 1 : y < 1 ? 4711 : 42; Throws an error as y is not defined 

// Function declaration
function square(x) {
    return x * x;
}

function hypotenuse(a, b) {
    return math_sqrt(square(a) + square(b));
}

hypotenuse(3, 4);

1 + 2 * 3 + 4;

1 + 2 >= 3 ? 4 * 5 : 6 + 7;

function yes(x) {
    return x ? 1 + 3 : 10 + 10;
}

yes(x > 0);

// Import statements in Source
import { red, rcross, sail, corner, nova, heart, show, 
         quarter_turn_right, stack, stackn, repeat_pattern} from "rune";

const sideways_heart = quarter_turn_right(heart); // Function Abstraction
show(stack(sideways_heart, sail)); 