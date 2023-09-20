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



// Reflection 6 Exercises
// Question 1
function insert_cmp(x, xs, cmp) {
    return is_null(xs) 
           ? list(x)
           : cmp(x, head(xs)) 
           ? pair(x, xs)
           : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) {
    return is_null(xs) 
           ? xs
           : insert_cmp(head(xs), 
                        insertion_sort_cmp(tail(xs), cmp),
                        cmp);
}

// Test
const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);

// (a)
insertion_sort_cmp(xs, (x, y) => x <= y);
// Result: list(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)

// (b)
insertion_sort_cmp(xs, (x, y) => x >= y);
// Result: list(9, 8, 7, 6, 6, 5, 4, 3, 2, 1)

// (c)
insertion_sort_cmp(xs, (x, y) => false);
// Result: list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6)

// (d) Order ascending first, then shift all even to the front, while odd goes back
insertion_sort_cmp(xs, );
// Result: list(2, 4, 6, 6, 8, 9, 7, 5, 3, 1)



// Question 2
// half, rounded downwards
function middle(n) {
    return math_floor(n / 2);
}

// put the first n elements of xs into a list
function take(xs, n) {
    return n <= 0
           ? null 
           : pair(head(xs), take(tail(xs), n - 1));
}

// drop the first n elements from the list and return the rest
function drop(xs, n) {
    return n >= length(xs)
           ? null
           : pair(list_ref(xs, n), drop(xs, n + 1));
}

// merge two sorted lists into one sorted list
function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        const x = head(xs);
        const y = head(ys);
        return x < y
               ? pair(x, merge(tail(xs), ys))
               : pair(y, merge(xs, tail(ys)));
    }
}

// a list with more than one element is sorted
// by splitting it into two lists of (almost) equal
// length, sorting the halves and then merging them
// together
function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)),
                     merge_sort(drop(xs, mid)));
    }
}

// Test
merge_sort(list(7, 6, 3, 8, 4, 6, 5, 9, 8, 3, 1, 5, 2));

// (a) Runtime: O(n)
// (b) Runtime: O(3n) = O(n)


















