/** Problem 06 : (Current Salary ) */
var experience = 40;
var startingSalary = 30000;
//write your code here

var presentSalary = startingSalary;

for (var i = 1; i <= experience; i++) {
  presentSalary += presentSalary * 0.05;
}

console.log(presentSalary.toFixed(2));
