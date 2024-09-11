const x = 10;
const y = 20;

function f() {
    return 3;
}

function f1(g) {
    return 3;
}

function g(x) {
    return y => y + x;
}

function g2(x) {
    return x => x + y;
}


g(f()); // function
g(f())(5); // 8
g2(f()); // function
g2(f())(5); // 25

f1(x => 1 + 2); // does it perform any addition?