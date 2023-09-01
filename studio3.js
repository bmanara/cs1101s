import {beside, show, stack, circle, square, ribbon, blank, stack_frac, beside_frac} from "rune";

function moony_1(bottom_right) {
    return beside(stack(circle, square), stack(blank, bottom_right));
}

function moony_2(n) {
    return n === 1
           ? circle
           : beside(stack(circle, square), stack(blank, moony_2(n - 1)));
}

function moony(n) {
    return n === 1
           ? circle
           : beside_frac(1 / n, 
                         stack_frac(1 / n, circle, square), 
                         stack_frac(1 / n, blank, moony(n - 1)));
}

// show(moony_1(ribbon));
// show(moony_2(5));
// show(moony(5));

// Extra S3
// Time: O(log(n)) Space: O(log(n))

// function fast_expt(b, n) {
//     return n <= 1
//           ? b
//           : n % 2 === 0
//           ? math_pow(fast_expt(b, n / 2), 2)
//           : b * fast_expt(b, n - 1);
// }

// fast_expt(2, 5);

// // Time: O(log(n)) Space: O(1)

// function iter(exp, base, product) {
//     return exp === 0
//           ? product
           
// }

// Time: O(1) Space: O(1)


// Brief 3: Curves in Source, based on parametric representation
// Curve := number --> Point
import { make_point, draw_connected, draw_connected_full_view_proportional,
         x_of, y_of, rotate_around_origin, translate, arc, make_color_point,
         make_3D_color_point, draw_3D_connected_full_view_proportional } from "curve";

function unit_circle(t) {
    return make_point(math_cos(2 * math_PI * t),
                      math_sin(2 * math_PI * t));
}

function unit_line_at(y) {
    return t => make_point(t, y);
}

const unit_line = unit_line_at(0);

// Number is the number of straight line segments used to draw the curve (resolution)
// draw_connected(200)(unit_circle);
// draw_connected_full_view_proportional(200)(unit_circle);
// draw_connected_full_view_proportional(8)(unit_circle);
// draw_connected(200)(unit_line);

function spiral_one(t) {
    const p = unit_circle(t);
    return make_point(t * x_of(p), t * y_of(p));
}

// spiral is a function that returns a curve
function spiral(rev) {
    return t => {
        const p = unit_circle((t * rev) % 1); // Range of parameter should be between 0 and 1
        return make_point(t * x_of(p), t* y_of(p));
    };
}

// draw_connected_full_view_proportional(200)(spiral_one);
// draw_connected_full_view_proportional(300)(spiral(4));

// Transformations on Curves
const rot_line = rotate_around_origin(0, 0, math_PI / 6)(unit_line); // rotate 30 degress at z-axis

// const shifted_rot_line = translate(0, 0.25, 0)(rot_line);

// draw_connected(200)(shifted_rot_line);

function compose(f, g) {
    return x => f(g(x));
}

const shift_rot = compose(translate(0, 0.25, 0), 
                          rotate_around_origin(0, 0, math_PI / 6));

const shifted_rot_line = shift_rot(unit_line);

// Connecting 2 curves
function connect_rigidly(curve1, curve2) {
    return t => t < 1 / 2
           ? curve1(2 * t)
           : curve2(2 * t - 1);
}

const result_curve = connect_rigidly(arc, translate(1, 0, 0)(arc));

// draw_connected_full_view_proportional(200)(result_curve);

// Drawing colored curves and 3D Curves

function colorful_3D_spiral(rev) {
    return t => {
        const p = unit_circle((t * rev) % 1);
        const R = math_max(0, 1 - 2 * t) * 255;
        const G = (1 - math_abs(1 - 2 * t) * 255);
        const B = math_max(0, 2 * t - 1) * 255;
        return make_3D_color_point(t * x_of(p), t * y_of(p), 2 * t, R, G, B);
    };
}

// draw_3D_connected_full_view_proportional(3000)(colorful_3D_spiral(33));









