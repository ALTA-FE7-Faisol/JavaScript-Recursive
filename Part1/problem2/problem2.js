function fibonacci(number) {
  // Your code here
  if(number <= 1) {
    return number;
  }
  else {
    return fibonacci(number-1) + fibonacci(number - 2);
  }
}
console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(12));

module.exports = fibonacci;
