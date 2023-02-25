const reverseInt = (n) => {
    let rev = n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n);
}