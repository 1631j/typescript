/////// FUNCTIONS //////
/*
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi("john");
// sayHi(3)
// sayHi('peter', 'random');

function calculateDiscount(price: number): number {
  // price.toUpperCase();
  const hasDiscount = true;
  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// "any" example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;

// run time error
someValue.myMethod();
*/

/*
Create a new array of names.
Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
Use this function to check if various names are in your array and log the results.

const names = ["john", "peter", "susan", "anna"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = 'Jane';
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}


const sum = (a: number, b: string) => {
  return a + b;
};

sum(1, "2");
// console.log(sum(1, "2"));

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
*/

////// ARRAYS AND OBJECTS //////
let stringArr = ["john", "peter", "susan", "anna"];

let guitars = ["strat", "les paul", 5150];

let mixedData = ["EVH", 5150, true, "strat", 1984];

stringArr[0] = "jane";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("jim");

let test = [];
let bands: string[] = [];
bands.push("van halen");

//// TUPLES ///////
let myTuple: [string, number, boolean] = ["john", 5150, true];

let mixed = ["john", 5150, true];

// mixed = myTuple;
// myTuple = mixed //it will not work

myTuple[1] = 5150;

//// OBJECTS //////
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "James",
  prop2: true,
};
exampleObj.prop1 = "John";

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie Van Halen",
  active: true,
  albums: ["1984", 5150, 1984],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};
evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return "Hello there";
};
console.log(greetGuitarist(evh));
