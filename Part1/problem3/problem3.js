function primaSegiEmpat(wide, high, start) {
  // Your code here
  let arr = [];
  let prima = [2, 3, 5, 7];
  
  while (arr.length != wide * high) {
    start++;
    if (prima.includes(start) || (start % 2 != 0 && start % 3 != 0 && start % 5 != 0 && start % 7 != 0)) {
      arr.push(start);
    }
  }
  
  let up = 0;
  let low = wide;
  let s = '';
  
  for (let i = 0; i < high; i++) {
    s += arr.slice(up, low).join(' ') + '\n';
    up += wide;
    low += wide;
  }
 
  console.log((s += arr.reduce((a, b) => a + b, 0)));
}
  
primaSegiEmpat(2, 3, 13)
primaSegiEmpat(5, 2, 1)

module.exports = primaSegiEmpat;
