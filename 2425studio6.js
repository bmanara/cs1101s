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
function remove_duplicates(lst) {
    return is_null(lst)
        ? null
        : pair(head(lst),
            remove_duplicates(
	            filter(x => !equal(x, head(lst)), tail(lst))));
}

remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));

// Q3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));

        // Combinations that do not use the head coin 
        // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));

        // Combinations that use the head coin.
        const combi_C = map(c => pair(head(coins), c), combi_B);

        return append(combi_A, combi_C);
    }
}

makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
//              list(1, 20, 1), list(1, 10, 5, 5, 1), 
//              list(1, 10, 5, 1, 5))

// Studio S6 In-Class
// Q1
function remove_duplicates(lst) {
    return accumulate(
        (x, xs) =>
            is_null(member(x, xs))
                ? pair(x, xs)
                : xs,
        null,
        lst);
}

remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(4, 3, 1, 2)

remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "c", "b", "d")

// Q2
function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        const subsets_rest = subsets(tail(xs));
        const x = head(xs);
        const has_x = map(s =>pair(x, s), subsets_rest);
        return append(subsets_rest, has_x);
    }
}

// SOLUTION 2:
function subsets_2(xs) {
    return accumulate(
        (x, ss) => append(ss, map(s => pair(x, s), ss)),
        list(null),
        xs);
}

subsets(list(1, 2, 3, 4));

// Q3
function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(append, null,
            map(x => map(p => pair(x, p),
                         permutations(remove(x, s))),
                s));
}

permutations(list(1, 2, 3, 4));