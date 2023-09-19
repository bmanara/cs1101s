// // Question 1
// function my_map(f, xs) {
//     return accumulate((x, y) => pair(f(x), y), null, xs);
// }

// my_map(x => x + 1, list(1, 2, 3));

// Question 2
// function remove_duplicates(lst) {
//     return accumulate((x, y) => pair(x, filter(h => h !== x, y)), null, lst);
// }

// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));

// // Question 3
// function makeup_amount(x, coins) {
//     if (x === 0) {
//         return list(null);
//     } else if (x < 0 || is_null(coins)) {
//         return null;
//     } else {
//         // Combinations that do not use the head coin.
//         const combi_A = makeup_amount(x, tail(coins));

//         // Combinations that do not use the head coin 
//         // for the remaining amount.
//         const combi_B = makeup_amount(x - head(coins), tail(coins));

//         // Combinations that use the head coin.
//         const combi_C = map(xs => pair(head(coins), xs), combi_B);

//         return append(combi_A, combi_C);
//     }
// }

// makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// // Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// //              list(1, 20, 1), list(1, 10, 5, 5, 1), 
// //              list(1, 10, 5, 1, 5))


// In-class Studio Questions
// Question 1
function remove_duplicates(lst) {
    return accumulate((x, y) => pair(x, filter(h => !equal(h, x), y)), null, lst);
}

// Question 2
function subsets(xs) {
    if (is_null(xs)) {
        return list(xs);
    }
    else {
        // We don't add the first element to the subset
        const A = subsets(tail(xs));
        
        // We add the first element to the subset
        const B = map(x => append(list(head(xs)), x), A);
        
        return append(A, B);
    }
}

display_list(subsets(list(1, 2, 3)));

// Question 3






















