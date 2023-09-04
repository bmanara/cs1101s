function pascal(row, position) {
    // If reached to the top, or reached to the sides, return 1
    if (row === 0 || position === 0 || row === position) {
        return 1;
    } else {
        return pascal(row - 1, position) + pascal(row - 1, position - 1);
    }
}

