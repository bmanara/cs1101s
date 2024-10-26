// Memoized Streams
function memo_fun(fun) {
    let already_run = false;
    let result = undefined;

    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function ms(m, s) {
    display(m);
    return s;
}

// const ones = pair(1, () => ones);

// const onesA = pair(1, () => ms("A", onesA));
// stream_ref(onesA, 3);

// const onesB = pair(1, memo_fun(() => ms("B", onesB)));
// stream_ref(onesB, 3);


// Key thing to note:
// Everytime we call m_integers_from, we are creating a new function that is "memoized"
// Therefore, we have a bunch of "memoized functions".
function m_integers_from(n) {
    return pair(n, 
        memo_fun(() => ms("M: " + stringify(n), 
                          m_integers_from(n + 1))));
}

const m_integers = m_integers_from(1);

stream_ref(m_integers, 0);
stream_ref(m_integers, 1);
stream_ref(m_integers, 2);
stream_ref(m_integers, 2);
// stream_ref(m_integers, 5);
// stream_ref(m_integers, 5);