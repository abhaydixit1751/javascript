// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// let count = 0;

// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("button clicked", count);
// });

// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("button clicked", count);
//   });
// }
// attachEventListeners();

// console.log("start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 0);

// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return Math.PI * radius * 2;
};
const diameter = function (radius) {
  return 2 * radius;
};

calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

// console.log(calculate(radius, area));
console.log(radius.map(area));

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));

const arr = [5, 1, 3, 2, 6];

//sum or max
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

// writing using reduce
const output = arr.reduce((acc, el) => acc + el, 0);
console.log(arr.reduce((acc, el) => (el > acc ? el : acc), 0));
const output2 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);
console.log(output2);

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "saini", age: 75 },
  { firstName: "akshelonay", lastName: "saini", age: 60 },
];

// acc={26:1, 75:1, 60:1}

console.log(
  users.reduce((acc, curr) => {
    if (acc[curr.age]) {
      acc[curr.age]++;
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {})
);
