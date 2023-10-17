// function change(x, new_value) {
//     x = new_value;
// }

// let x = 0;
// change(x, 1);

// x;

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
