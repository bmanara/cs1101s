// // Question 2(b)
function bubblesort_list(L) {
    // Your solution here.
    const len = length(L);
    
    function helper(xs, start, stop) {
        if (stop === 0) {
            return xs;
        } else if (is_null(tail(xs)) || start === stop) {
            return helper(L, 0, stop - 1);
        } else {
            if (head(xs) > head(tail(xs))) {
                const temp = head(xs);
                display(temp);
                set_head(xs, head(tail(xs)));
                set_head(tail(xs), temp);
            }
        }
        
        helper(tail(xs), start + 1, stop);
    }
    
    helper(L, 0, len - 1);
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]


// Question 3(b)
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


// // The memoized version.
// // n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n === 0) {
        return 1;
    } else if (n < 0 || k === 0) {
        return 0;
    } else if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const combiA = mcc(n, k - 1);
        const combiB = mcc(n - first_denomination(k), k);
        const total = combiA + combiB;
        write(n, k, total);
        return total;
    }
    
}

// mcc(365, 5);  // Expected result: 1730


// In-class Studio


function rotate_matrix(M) {
    // Try by reversing the rows and then flipping it through the xy-line
}

let matrix_2d = [[1, 2, 3, 4],
                 [5, 6, 7, 8], 
                 [9, 10, 11, 12],
                 [13, 14, 15, 16]];
                 
rotate_matrix(matrix_2d);
// matrix_2d;





















