// function change(x, new_value) {
//     x = new_value;
// }

// let x = 0;
// change(x, 1);

// x;

// Question 2

function d_filter(pred, xs) {
    if (is_null(xs)) {
        return xs;
    } else if (pred(head(xs))) {
        set_tail(xs, d_filter(pred, tail(xs)));
    } else {
        d_filter(pred, tail(xs));
    }
}

let L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L);
L;




