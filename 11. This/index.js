"use strict";
//this in global space

//this inside a function
function x() {
  console.log(this);
}
x();

// console.log(this);
//this in strict mode (this substitution)

//this value depends on how this is called (window)

//this inside a object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x();
//call apply bind methods (sharing methods )

const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};

// student.printName();

const student2 = {
  name: "Deepika",
};
student.printName.call(student2);
//this inside arrow function

const obj2 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj2.x();

// this inside the nested arrow functtion

const obj3 = {
  a: 10,
  x: function () {
    var b = 20;
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj3.x();
//this inside DOM
