/*
function change(x, new_value) {
    x = new_value;
}

let x = 0;
change(x, 1);

x;

// Question 2

// function d_filter(pred, xs) {
//     function remove(pred, xs) {
//         if (!pred(head(xs))) {
//             set_head(xs, head(tail(xs)));
//             set_tail(xs, tail(tail(xs)));
//             return true;
//         }
        
//         return false;
//     }
    
//     if (is_null(tail(tail(xs)))) {
//         if (!pred(head(tail(xs)))) {
            
//         }
//         // remove(pred, tail(xs));
//         remove(pred, xs);
//     } else {
//         const removed = remove(pred, xs);
//         return removed
//               ? d_filter(pred, xs)
//               : d_filter(pred, tail(xs));
//     }
// }

function d_filter(pred, xs) {
    if (!is_null(tail(xs))) {
        if (!pred(head(tail(xs)))) {
            set_tail(xs, tail(tail(xs)));
            d_filter(pred, xs);
        } else {
            d_filter(pred, tail(xs));
        }
    }
    if (!pred(head(xs))) {
        set_head(xs, head(tail(xs)));
        set_tail(xs, tail(tail(xs)));
    }
}

let L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L);
L; // returns [2, [4, [6, [8, null]]]]


// Question 3
// let a = 10;

// function foo(x) {
//     let b = 0;

//     function goo(x) {
//         let a = 30;

//         if (x <= 2) {
//             a = a + x;
//             b = b + x;
//             // Breakpoint #4
//         } else {
//             // Breakpoint #3
//             goo(x - 1);
//         }
//     }

//     a = a + x;
//     b = b + x;
//     // Breakpoint #2
//     goo(3);
// }

// // Breakpoint #1
// foo(1);
// // Breakpoint #5
// 10 + 5;

*/

// Reflection 9
// Question 1

function make_optimized_search(A) {
    const len = array_length(A);
    
    function copy(A) {
        const B = [];
        const len = array_length(A);
        for (let i = 0; i < len; i = i + 1) {
            B[i] = A[i];
        }
        
        return B;
    }
    
    /*
    function selection_sort(A) {
        
        function find_min_pos(arr, start, end) {
            let value = arr[start];
            let index = start;
            for (let j = start + 1; j < end; j = j + 1) {
                if (value > arr[j]) {
                    value = arr[j];
                    index = j;
                }
            }
            
            return index;
        }
        
        function swap(arr, x, y) {
            const temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
        }
        
        for (let i = 0; i < len; i = i + 1) {
            const position = find_min_pos(A, i, len);
            swap(A, i, position);
        }
    }
    */
    
    // function merge_sort(A) {
    //     const len = array_length(A);
    //       function helper(A, start, end) {
    //         //   ???
    //       }
    //     return helper(A, 0, len - 1);
    // }
    
    function binary_search(A, x, start, end) {
        if (start > end) {
            return false;
        }
        
        const mid = math_floor((start + end) / 2);
        const result = A[mid] === x || (x < A[mid]
                                        ? binary_search(A, x, start, mid - 1)
                                        : binary_search(A, x, mid + 1, end));
        return result;
    }
    
    const B = copy(A);
    // merge_sort(B);
    // selection_sort(B); // should be using merge_sort(A);
    
    return x => binary_search(B, x, 0, len - 1);
}

// const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
// const my_search = make_optimized_search(my_array);

// my_search(14);
// my_search(15);
// my_search(30);


// Question 2a
function fib(n) {
    const mem = [0, 1];
    /*
    function helper(n) {
        if (mem[n] !== undefined) {
            return mem[n];
        } else {
            const result =  n <= 1 ? 1 : helper(n - 1) + helper(n - 2);
            mem[n] = result;
            return result;
        }       
    }
    return helper(n);
    */
    for (let i = 2; i <= n; i = i + 1) {
        mem[i] = mem[i - 1] + mem[i - 2];
    }
    
    return mem[n - 1]; // dont need n - 1 based on exercise but fuck you too
}

fib(29);

// Note that the helper function is paramount to this working, else the runtime
// is still going to be exponential.


// Question 2b
function fib2(n) {
    n = n - 1; // not needed but im gonna leave it in cause fuck you
    if (n < 1) {
        return n;
    }
    
    let x = 0;
    let y = 1;
    for (let i = 2; i <= n; i = i + 1) {
        y = x + y;
        x = y - x;
    }
    return y;
}

fib2(29);




















