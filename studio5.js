/* Start comment
// Recitation 5
// Question 1
const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8 , 9));

list_to_string(LoL);

// function flatten_list(xs) {
//     function operation(x, y) {
//         if (!is_list(x)) {
//             return pair(x, y);
//         } else {
//             return append(flatten_list(x), y);
//         }
//     }
    
//     return accumulate(operation, null, xs);
// }

function flatten_list(xs) {
    return accumulate(append, null, xs);
}

flatten_list(LoL);

// Question 2
// function tree_sum(xs) {
//     const new_list = flatten_list(xs);
//     return accumulate((x, y) => x + y, 0, new_list);
// }

function tree_sum(tree) {
    return is_null(tree)
           ? 0
           : (is_list(head(tree)) // can be replaced with is_pair for time saving
             ? tree_sum(head(tree))
             : head(tree))
             + tree_sum(tail(tree));
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
End comment
*/


// Question 3 
// It's important to think about how accumulate works, it only works on a single
// list, hence we need to decide on how to work with the head of the list, depending
// on whether it is a list or data

function accumulate_tree(f, op, initial, tree) {
    return accumulate(
             (x, y) => is_list(x) 
                       ? op(accumulate_tree(f, op, initial, x), y) // wishful thinking
                       : op(f(x), y),
             initial,
             tree);
}

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

function count_data_items(tree) {
    return accumulate_tree(x => 1, (x, y) => x + y, 0 , tree);
}

function flatten(tree) {
    return accumulate_tree(x => list(x), append, null , tree);
}

// Test
const tree1 = list(1, 2, list(3, 4), list(5, list(6, 7)));

const tree2 = list(1, list(list(8, 9), 10, list(11, list(12))), 
                  null, list(3, 4), list(5, list(6, 7)));

display( tree_sum(tree1) ); // Result: 28
display( tree_sum(tree2) ); // Result: 76

display( count_data_items(tree1) ); // Result: 7
display( count_data_items(tree2) ); // Result: 11

display_list( flatten(tree1) );
// Result: list(1, 2, 3, 4, 5, 6, 7)
display_list( flatten(tree2) );
// Result: list(1, 8, 9, 10, 11, 12, 3, 4, 5, 6, 7)

































