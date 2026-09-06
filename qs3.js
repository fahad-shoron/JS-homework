// student mark section ;
let bangla = 85;
let english = 79;
let math = 80;

let total = bangla + english + math;
let avg = total / 3;
let grade = "";

if (bangla < 33 || english < 33 || math < 33) {
  grade = "F (Fail)";
} else if (avg >= 80) {
  grade = "A+";
} else if (avg >= 70) {
  grade = "A";
} else if (avg >= 60) {
  grade = "B";
} else if (avg >= 50) {
  grade = "C";
} else if (avg >= 40) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Total Marks", total);
console.log("Average Marks", avg);
console.log("Grade", grade);
