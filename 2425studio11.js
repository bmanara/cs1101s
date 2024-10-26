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

const ones = pair(1, () => ones);

const onesA = pair(1, () => ms("A", onesA));

const onesB = pair(1, memo_fun(() => ms("B", onesB)));

//stream_ref(ones, 3);
stream_ref(onesA, 3);
//stream_ref(onesB, 3);