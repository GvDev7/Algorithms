const stepsRecursion = (n, row = 0, stair = '') => {
    if(n === row) {
        return;
    }
    if(n === stair.length) {
        return steps(n, row + 1);
    }
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}