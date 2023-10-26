// // // Question 2(b)
// function bubblesort_list(L) {
//     // Your solution here.
//     const len = length(L);
    
//     function helper(xs, start, stop) {
//         if (stop === 0) {
//             return xs;
//         } else if (is_null(tail(xs)) || start === stop) {
//             return helper(L, 0, stop - 1);
//         } else {
//             if (head(xs) > head(tail(xs))) {
//                 const temp = head(xs);
//                 set_head(xs, head(tail(xs)));
//                 set_head(tail(xs), temp);
//             }
//         }
        
//         helper(tail(xs), start + 1, stop);
//     }
    
//     helper(L, 0, len - 1);
// }

// const LL = list(3, 5, 2, 4, 1);
// bubblesort_list(LL);
// LL; // should show [1, [2, [3, [4, [5, null]]]]]


// // Question 3(b)
// const mem = [];

// function read(n, k) {
//     return mem[n] === undefined
//           ? undefined
//           : mem[n][k];
// }

// function write(n, k, value) {
//     if (mem[n] === undefined) {
//         mem[n] = [];
//     }
//     mem[n][k] = value;
// }

// function first_denomination(kinds_of_coins) {
//     return kinds_of_coins === 1 ?   5 :
//           kinds_of_coins === 2 ?  10 :
//           kinds_of_coins === 3 ?  20 :
//           kinds_of_coins === 4 ?  50 :
//           kinds_of_coins === 5 ? 100 : 0;
// }


// // // The memoized version.
// // // n is the amount in cents, and k is the number of denominations.
// function mcc(n, k) {
//     if (n === 0) {
//         return 1;
//     } else if (n < 0 || k === 0) {
//         return 0;
//     } else if (read(n, k) !== undefined) {
//         return read(n, k);
//     } else {
//         const combiA = mcc(n, k - 1);
//         const combiB = mcc(n - first_denomination(k), k);
//         const total = combiA + combiB;
//         write(n, k, total);
//         return total;
//     }
    
// }

// // mcc(365, 5);  // Expected result: 1730


// // In-class Studio


// function rotate_matrix(M) {
//     // Try by reversing the rows and then flipping it through the xy-line
// }

// let matrix_2d = [[1, 2, 3, 4],
//                  [5, 6, 7, 8], 
//                  [9, 10, 11, 12],
//                  [13, 14, 15, 16]];
                 
// // rotate_matrix(matrix_2d);
// // matrix_2d;


// // Reflection 10
// // Question 1
// // const x = stream_map(display, enum_stream(0, 10)); // 0;
// // stream_ref(x, 3); // 1; 2; 3;
// // stream_ref(x, 5); // 1; 2; 3; 4; 5;

// function memo_fun(fun) {
//     let already_run = false;
//     let result = undefined;
    
//     function mfun() {
//         if (!already_run) {
//             result = fun();
//             already_run = true;
//             return result;
//         } else {
//             return result;
//         }
//     }
    
//     return mfun;
// }

// function stream_map_optimized(f, s) {
//     return is_null(s)
//     ? null
//     : pair(f(head(s)),
//           memo_fun(() => stream_map_optimized(f, stream_tail(s))));
// }

// // const y = stream_map_optimized(display, enum_stream(0, 10)); // 0;
// // stream_ref(y, 3); // 1; 2; 3;
// // stream_ref(y, 5); // 4; 5;

// // Question 2
// function zip_list_of_streams(xs) {
//     function helper(L) {
//         if (is_null(L)) {
//             return helper(xs);
//         } else {
//             const element = head(head(L));
//             set_head(L, stream_tail(head(L)));
//             return pair(element, () => helper(tail(L)));
//         }
//     }
    
//     return helper(xs);
// }

// const ones = pair(1, () => ones);
// const twos = pair(2, () => twos);
function stream_of_integers(n) {
    return pair(n, () => stream_of_integers(n + 1));
}
const integers = stream_of_integers(1);

// const zipped = zip_list_of_streams(list(ones, twos, integers));
// eval_stream(zipped, 9);

// Question 3
function add_streams(s1, s2) {
    return is_null(s1)
           ? s2
           : is_null(s2)
           ? s1
           : pair(head(s1) + head(s2), () => add_streams(stream_tail(s1), 
                                                         stream_tail(s2)));
}

function partial_sums(s) {
    return pair(head(s), () => add_streams(partial_sums(s), stream_tail(s)));
}

const partial_s = partial_sums(integers);
eval_stream(partial_s, 3);


















