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

// Any type and Union type
const a = 1;
const b: any = 1;

const c: (number | string) = 1;
const d: (number | string) = "one";
// const e: (number | string) = x => x; // error thrown

// Source S2 Typed
// Type Annotations
const p: Pair<number, number> = pair(1, 2);
const l: List<number> = list(1, 2, 3, 4);


function map_number(f: (number) => number,
                    xs: List<number>): List<number> {
    return is_null(xs) 
        ? null
        : pair(f(head(xs)), map_number(f, tail(xs)));
}

map_number(x => x * 2, l);


// Source S3 Typed
// Type Annotations
let y : number = 1;
const A : number[] = [1, 2, 3];
const s : Stream<number> = integers_from(1);


