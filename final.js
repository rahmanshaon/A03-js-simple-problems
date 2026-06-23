/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var assetDiv = area / 2;
console.log(assetDiv);


/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - rest`);
  }
}


/** Problem 04 - (Delete / Store) */
var fileName = "docx.xpdf";
//write your code here
if (fileName[0] === "#" || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}


/** Problem 05 - ( PH Email Generator ) */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
var emailAddress = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(emailAddress);


/** Problem 06 : (Current Salary ) */
var experience = 40;
var startingSalary = 30000;
//write your code here
var presentSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  presentSalary += presentSalary * 0.05;
}
console.log(presentSalary.toFixed(2));
