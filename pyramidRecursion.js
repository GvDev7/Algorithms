const pyramidRecursion = (n, row = 0, level = '') => {
    if(row === n) {
        return;
    }

    if(level.length === 2 * n - 1) {
        return pyramidRecursion(n, row + 1);
    }
    const midPoint = Math.floor((2 * n - 1) / 2);
    let add;
    if(midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramidRecursion(n, row, level + add);
}