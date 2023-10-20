// Searching and Sorting 2; Memoization

/*
// Linear Search / Sequential Search
To find a number in a list, inspect the list from the front, element by element.
We can use the same approach for arrays, using loops
*/

const A = [3, 9, 2, 1, 6, 5, 3, 8];

function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v) { // stops when i >= len or when v is found
        i = i + 1;
    }
    
    return (i < len);  // using index to show boolean, smart...
}

// linear_search(A, 5); 
// Any value can be retrieved in O(1) time
// Therefore, Omega(1), O(n) runtime

/*
// Binary Search 
Input array MUST be sorted, in some total order. Check the middle element, if it
is what we're looking for, return, else search either left half or right half.
Similar to Binary Search Trees (BST), but we don't need it cause of random access
*/

function binary_search(A, v) {
    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            const mid = math_floor((low + high) / 2);
            return (v === A[mid]) ||           // either value equals to mid OR
                   (v < A[mid]                 // if value smaller than mid,
                    ? search(low, mid - 1)     // search left, else
                    : search(mid + 1, high));  // search right.
        }
    }
    
    return search(0, array_length(A) - 1);
}

// binary_search(A, 5);

function binary_search_loop(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    
    while (low <= high) {
        const mid = math_floor((high + low) / 2);
        if (v === A[mid]) {
            break;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return (low <= high);
}

// binary_search_loop(A, 5);
// Omega(1), O(logn) runtime

// Sorting 
/*
Selection Sort: For lists, we find the smallest element x and remove it.
                Then, sort the remaining list and put x in front.
                For arrays, build the sorted array from left to right.
                For each remaining unsorted portion to the right of position i,
                find the smallest element and SWAP it into position i.
*/

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
    
function selection_sort(A) {
    const len = array_length(A);
    
    function find_min_pos(arr, start, end) {
        let min_pos = start;
        for (let i = start + 1; i <= end; i = i + 1) {
            if (arr[min_pos] > arr[i]) {
                min_pos = i;
            }
        }
        
        return min_pos;
    }

    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos); 
    }
}

// selection_sort(A);
// A;

/*
// Insertion Sort: For lists, sort the tail of the given list using wishful
                   thinking, insert the head in the right place
                   For arrays, move a pointer i from left to right, the array to
                   the right is sorted. Swap the value at i with its neighbor to
                   left, until the neighbor is smaller.
*/

function insertion_sort(A) {
    const len = array_length(A);
    
    for (let i = 1; i < len; i = i + 1) { // i starts at 1... 
        let j = i - 1;                // element to the left of pointer i
        while (j >= 0 && A[j] > A[j + 1]) {
            swap(A, j, j + 1);       // swap the right element with the left
            j = j - 1;               // move pointer j to the left, to compare
        }
    }
}

// insertion_sort(A);
// A;

// To fully understand this, draw out the array and point to it
// We could also shift elements to the right instead of the left

function insertion_sort2(A) {
    const len = array_length(A);
    
    for (let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A [j];  // shift right
            j = j - 1;
        }
        A[j + 1] = x;
    }
}

// insertion_sort2(A);
// A;

// A little more efficient because we don't store a temp pointer.

/*
// Merge Sort: For lists, split the list in half, sort each half using wishful
               thinking, merge the sorted lists together.
               For arrays, sort the halves, merge the halves (using temporary
               arrays). No splitting involved.
*/

function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}

function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}

function merge(A, low, mid, high) {
    const B = [];
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    
    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }   
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}

// merge_sort(A);
// A;


// Memoization 
// Function records what was calculated before in a "local table"
// mem[i] will store fib(i), using "global memory"

const mem = [];

function mfib(n) {
    function fib(k) {
        if (mem[k] !== undefined) { // mem[k] has been computed already
            return mem[k];
        } else {
            const result = k <= 1 ? k : fib(k - 1) + fib(k - 2);
            mem[k] = result;
            return result;
        }
    }
    return fib(n);
}

// mfib(29);
// Compared to our previous iteration of fib, our runtime is Theta(n)

// Abstraction of Memoization
function memoize(f) {
    const mem = [];
    
    function mf(x) {
        if (mem[x] !== undefined) {
            return mem[x];
        } else {
            const result = f(x);
            mem[x] = result;
            return result;
        }
    }
    return mf;
}

// The above must be used correctly, else we would still get an exponential runtime

// Tribonnaci Sequence
const mtrib = memoize(n => n === 0 ? 0
                           : n === 1 ? 1
                           : n === 2 ? 1
                           : mtrib(n - 1) + mtrib(n - 2) + mtrib(n - 3));
                           
// mtrib(10);

// When used correctly, memoize will give us a function with runtime n.

/*
// The n-Choose-k Problem
// How many ways to choose k items out of n possible choices?
Consider one of the items x; x is either chosen or it is not.
Then, numbers of ways is sum of ...
*/

function choose(n, k) {
    return k > n
           ? 0
           : k === 0 || k === n
           ? 1
           : choose(n - 1, k) + choose(n - 1, k - 1);
}

// Above is not very efficient... O(n^k) runtime
const mem1 = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function mchoose(n, k) {
    if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = k > n
                       ? 0
                       : k ===0 || k === n 
                       ? 1
                       : choose(n - 1, k) + choose(n - 1, k - 1);
        write(n, k, result);
        return result;
    }
}

// Order of Growth?
// Runtime: Theta(k^2 - n)
// Space: Theta(nk)


// Brief 9 (Streams I)
/*
New data structure: Streams, "lazy" data structures
Produce elements only on demand/
Can we implement conditionals using functions?
E1 ? E2 : E3 as... cond(E1, E2, E3)
*/

function cond(x, y, z) {
    if (x) { return y; } else { return z; }
}

// In our original conditional, both E2 and E3 might or might not be evaluated.
// But in our function implementation, both E2 and E3 are evaluated regardless.
// For it to be "lazy", cond_lazy(E1, () => E2, () => E3)

function cond_lazy(x, y, z) {
    if (x) { return y(); } else { return z(); }
}

// Evalutes an expression when necessary, on-demand
/*
We delay the evaluation of E2 and E3 until enough info is gained to decide 
which one was needed
Functions allow us to describe an activity without actually doing it
*/

/*
// Delayed Lists
Our pairs contain a data item as head, but a function as tail that can be 
activated when needed.
A stream is either the empty list, or a pair whose tail is a nullary function
that returns a stream
*/

const s1 = null;  // An empty stream

const s2 = pair(1, () => null);  // a stream with element 1

const s3 = pair(1, 
                () => pair(2, 
                           () => pair(3, 
                                      () => null))); 
                                      
// a stream with elements 1, 2, 3. Note that the stream is still only a pair.
// s1, s2 and s3 are finite streams
// Below, is an example of an infinite stream, filled with ones

function ones_stream() {
    return pair(1, ones_stream);
}

const ones = ones_stream();
head(ones); // 1
head(tail(ones)()); // 1
head(tail(tail(ones)())()); // 1

ones;
// Note that ones has not changed, it is still a pair with 1 as head, function as tail

function stream_tail(stream) {
    return tail(stream)();
}

head(stream_tail(ones)); // 1, makes it more readable

// Streams are lazy lists
function enum_stream(low, hi) {
    return low > hi
           ? null 
           : pair(low, () => enum_stream(low + 1, hi));
}

// O(1) runtime, only returns a pair. Will only "create" the tail if needed.

const s = enum_stream(1, 100);
head(s); // 1
head(stream_tail(stream_tail(s))); // 3

// A function to help us find an element based on given index.
function stream_ref(s, n) {
    return n === 0
           ? head(s)
           : stream_ref(stream_tail(s), n - 1);
}

stream_ref(s, 8);

// O(n) runtime

// map function for stream
function stream_map(f, s) {
    return is_null(s)
           ? null 
           : pair(f(head), () => stream_map(f, stream_tail(s)));
}


// The tail turns into a function that will run map as well.

// filter function for stream
function stream_filter(p, s) {
    return is_null(s)
           ? null 
           : p(head(s))
           ? pair(head(s), () => stream_filter(p, stream_tail(s)))
           : stream_filter(p, stream_tail(s));
}





















