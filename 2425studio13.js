// Types

// Source S1 Types

// Type annotations
const x: number = 1;

function f(x: number): number {
    return x;
}

f(x);
// f("A");

function is_greater(x: number, y: number): boolean {
    return x > y;
}

const ans: boolean = is_greater(3, 2);
ans;

// Functions returning nothing
function yes(x: number): void {
    display(x);
}

yes(x);

// Higher Order Functions
function square(x: number): number {
    return x * x;
}

function rpn(n: number,
             pat: (number) => number,
             x: number): number {
    return n === 0
        ? x
        : rpn(n - 1, pat, pat(x));
}

rpn(3, square, 2);
