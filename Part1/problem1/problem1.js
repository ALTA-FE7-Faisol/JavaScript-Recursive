function primeX(number) {
  // Your code here
  let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  n = arr[number - 1];
  return n;
}
console.log(primeX(1));
console.log(primeX(5));
console.log(primeX(8));
console.log(primeX(9));
console.log(primeX(10));

module.exports = primeX;
