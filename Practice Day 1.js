// ==========================================
// JavaScript QA Practice - Day 1
// ==========================================

// Question 1:
// Count how many test cases have the status "Pass".

const testCases = [
  { id: 1, status: "Pass" },
  { id: 2, status: "Fail" },
  { id: 3, status: "Pass" },
  { id: 4, status: "Blocked" },
  { id: 5, status: "Fail" },
];

let counter = 0;

for (const element of testCases) {
  if (element.status === "Pass") {
    counter++;
  }
}

console.log("Q1 - Passed test cases:", counter);

// Question 2:
// Create a new array containing only the failed test cases.

let storing = [];

for (const element of testCases) {
  if (element.status === "Fail") {
    storing.push(element);
  }
}

console.log("Q2 - Failed test cases:", storing);

// Question 3:
// Find the first test case whose status is "Fail".

const result = testCases.find((el) => el.status === "Fail");

console.log("Q3 - First failed test case:", result);

// Question 4:
// Create a new array containing only the IDs
// of the failed test cases.

let failedTestIds = [];

for (const element of testCases) {
  if (element.status === "Fail") {
    failedTestIds.push(element.id);
  }
}

console.log("Q4 - Failed test IDs:", failedTestIds);

// Question 5:
// Calculate the pass percentage.

let totalTestCases = testCases.length;
let passedTestCases = 0;

for (const element of testCases) {
  if (element.status === "Pass") {
    passedTestCases++;
  }
}

let passedPercentage = (passedTestCases / totalTestCases) * 100;

console.log("Q5 - Passed test cases:", passedTestCases);
console.log("Q5 - Pass percentage:", `${passedPercentage}%`);
