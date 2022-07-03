module.exports = function reverse (n) {
    if (n>0) {
  return String(n).split('').reverse().map(Number).join('');
} else if (n<0) {
    return String(n).split('').reverse().slice(0, -1).map(Number).join('');
}
}
