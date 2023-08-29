import {beside, show, stack, circle, square, ribbon, blank, stack_frac, beside_frac} from "rune";

function moony_1(bottom_right) {
    return beside(stack(circle, square), stack(blank, bottom_right));
}

function moony_2(n) {
    return n === 1
           ? circle
           : beside(stack(circle, square), stack(blank, moony_2(n - 1)));
}

function moony(n) {
    return n === 1
           ? circle
           : beside_frac(1 / n, 
                         stack_frac(1 / n, circle, square), 
                         stack_frac(1 / n, blank, moony(n - 1)));
}

// show(moony_1(ribbon));
// show(moony_2(5));
// show(moony(5));

// Extra S3
// Time: O(log(n)) Space: O(log(n))

function fast_expt(b, n) {
    return n <= 1
           ? b
           : n % 2 === 0
           ? math_pow(fast_expt(b, n / 2), 2)
           : b * fast_expt(b, n - 1);
}

fast_expt(2, 5);

// Time: O(log(n)) Space: O(1)

function iter(exp, base, product) {
    return exp === 0
           ? product
           
}

// Time: O(1) Space: O(1)
