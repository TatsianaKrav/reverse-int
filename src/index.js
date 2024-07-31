module.exports = function reverse(n) {
    let reversedNum = Math.abs(n).toString().split('').reverse().join('');
    return +reversedNum;
}
