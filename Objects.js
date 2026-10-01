// ==========================================
// JavaScript Objects Practice
// Easy → Hard
// ==========================================

// Question 1
// Create a person object and print the name.

const person1 = {
  name: "Abhishek",
  age: 24,
  job: "QA",
};

console.log(person1.name);

// Question 2
// Change the age from 24 to 26.

const person2 = {
  name: "Abhishek",
  age: 24,
  job: "QA",
};

person2.age = 26;

console.log(person2);

// Question 3
// Add a new property called experience.

const person3 = {
  name: "Abhishek",
  age: 24,
  job: "QA",
};

person3.experience = 2;

console.log(person3);

// Question 4
// Delete the job property.

const person4 = {
  name: "Abhishek",
  age: 24,
  job: "QA",
};

delete person4.job;

console.log(person4);

// Question 5
// Create a calculator object with an add method.

const calculator1 = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator1.add(2, 1));

// Question 6
// Create an introduce method using this.

const person5 = {
  name: "Abhishek",
  age: 24,

  introduce: function () {
    console.log(`My name is ${this.name} and i am ${this.age} old`);
  },
};

person5.introduce();

// Question 7
// Create two objects and use this inside their methods.

const user1 = {
  name: "Abhishek",
  age: 24,

  greet: function () {
    console.log(`Hello i am ${this.name}`);
  },
};

const user2 = {
  name: "Meow",
  age: 23,

  greet: function () {
    console.log(`Hello i am ${this.name}`);
  },
};

user1.greet();
user2.greet();

// Question 8
// Create a calculator with add, subtract and multiply methods.

const calculator2 = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator2.add(10, 5));
console.log(calculator2.subtract(10, 5));
console.log(calculator2.multiply(10, 5));

// Question 9
// Create a student object and determine Pass/Fail.

const student = {
  name: "Abhishek",
  marks: 85,

  getResult() {
    if (this.marks >= 40) {
      console.log("Pass");
    } else {
      console.log("fail");
    }
  },
};

student.getResult();

// Question 10
// Create a bank account with deposit and withdraw methods.

const bankAccount = {
  owner: "Abhishek",
  balance: 5000,

  deposit(amount) {
    return (this.balance += amount);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      return (this.balance -= amount);
    } else {
      console.log("Insufficient balance");
    }
  },
};

console.log(bankAccount.deposit(2000));
console.log(bankAccount.withdraw(3000));
