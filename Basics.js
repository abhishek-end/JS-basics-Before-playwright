// 1. Print first and last element

const arr1 = ["abc", "cde", "fgh", "ijk", "lmn"];

console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

// 2. Print array length

const arr2 = [10, 20, 30, 40, 50];

console.log(arr2.length);

// 3. Change the third element to 100

const arr3 = [10, 20, 30, 40, 50];

arr3[2] = 100;

console.log(arr3);

// 4. Add 60 to the end

const arr4 = [10, 20, 30, 40, 50];

arr4.push(60);

console.log(arr4);

// 5. Add 5 to the beginning

const arr5 = [10, 20, 30, 40, 50];

arr5.unshift(5);

console.log(arr5);

// 6. Remove the last element

const arr6 = [10, 20, 30, 40, 50];

arr6.pop();

console.log(arr6);

// 7. Remove the first element

const arr7 = [10, 20, 30, 40, 50];

arr7.shift();

console.log(arr7);

// 8. Check if Mango exists

const fruits8 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits8.includes("Mango"));

// 9. Print every element using a loop

const arr9 = [10, 20, 30, 40, 50];

for (const num of arr9) {
  console.log(num);
}

// 10. Print only even numbers

const arr10 = [11, 24, 35, 42, 57, 60];

for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 === 0) {
    console.log(arr10[i]);
  }
}

// 11. Find the sum

const arr11 = [10, 20, 33, 40, 51];

let sum = 0;

for (let i = 0; i < arr11.length; i++) {
  sum = arr11[i] + sum;
}

console.log(sum);

// 12. Find the largest number

const arr12 = [12, 45, 7, 89, 23];

let greater = 0;

for (let i = 0; i < arr12.length; i++) {
  const element = arr12[i];

  if (element > greater) {
    greater = element;
  }
}

console.log(greater);

// 13. Count numbers greater than 50

const arr13 = [25, 60, 75, 10, 90, 45, 55];

let counter = 0;

for (let i = 0; i < arr13.length; i++) {
  const element = arr13[i];

  if (element > 50) {
    counter++;
  }
}

console.log(counter);

// 14. Print browsers using for...of

const browsers = ["Chrome", "Firefox", "Edge", "Safari"];

for (const element of browsers) {
  console.log(element);
}

// 15. Check if Priya exists

const users = ["Rahul", "Amit", "Priya", "Neha"];

const isUserExists = users.includes("Priya");

console.log(isUserExists);

// 16. Find the index of Edge

const browsers16 = ["Chrome", "Firefox", "Edge", "Safari"];

const index = browsers16.indexOf("Edge");

console.log(index);

// 17. Create a new array with numbers greater than 50

const numbers17 = [20, 55, 10, 80, 35, 90];

const result17 = [];

for (let i = 0; i < numbers17.length; i++) {
  if (numbers17[i] > 50) {
    result17.push(numbers17[i]);
  }
}

console.log(result17);

// 18. Multiply every number by 2

const numbers18 = [2, 4, 6, 8];

const result18 = [];

for (const element of numbers18) {
  result18.push(element * 2);
}

console.log(result18);

// 19. Count how many times Apple appears

const fruits19 = ["Apple", "Banana", "Apple", "Orange", "Apple", "Mango"];

let appleCounter = 0;

for (const element of fruits19) {
  if (element === "Apple") {
    appleCounter++;
  }
}

console.log(appleCounter);

// 20. Reverse an array without using reverse()

const numbers20 = [1, 2, 3, 4, 5];

const result20 = [];

for (let i = numbers20.length - 1; i >= 0; i--) {
  result20.push(numbers20[i]);
}

console.log(result20);
