// Trees

const treeA = list(1, 2, 3, 4);
const treeB = list(list(1, 2), list(3, 4));
const treeC = null;
const treeD = list(list(1, 2), null, 3, list(4, null));

// S6 Studio Worksheet
// Q1
function my_map(f, xs) {
    return accumulate((x, ys) => pair(f(x), ys), null, xs);
}

my_map(math_sqrt, list(1, 2, 3, 4, 5)); 

// Q2
