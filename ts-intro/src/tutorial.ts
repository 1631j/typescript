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
*/

/*
////// ENUMS //////
// "Unlike most TypeScript are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.C);

////// TYPE ALIASES //////
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
  //(string | number)[];
};

type UserId = stringOrNumber;

////// LITERAL TYPES //////
let myName: "james";

let userName: "john" | "jane" | "james";
userName = "john";

//// Functions ////
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg(add(1, 2));
logMsg("Hello there");
// logMsg(add(1, "2"));

// let subtract = (c: number, d: number): number {
//   return c - d;
// };

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 3));

//// REST PARAMETERS ////
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

const total1 = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5));
logMsg(total1(10, 2, 50));

//// NEVER ////
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) {
      break;
    }
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (isNumber(value)) {
    return "number";
  }
  if (typeof value === "string") {
    return "string";
  }
  return createError("This should never happen!");
};
*/

/*
//// ASSERTIONS ////
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific type
let a: One = "hello";
let b = a as Two; // les specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(1, 2, "concat") as string;

// Be careful TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(1, 2, "concat") as number;

10 as unknown as string;

// THE DOM

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;

let year: HTMLElement | null;
year = document.getElementById("year");
let thisYear: string;
thisYear = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}

// Or
const year1 = document.getElementById("year") as HTMLSpanElement;
const thisYear1: string = new Date().getFullYear().toString();
year1.setAttribute("datetime", thisYear1);
year1.textContent = thisYear1;
*/

/*
//// CLASSES ////
class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const James = new Coder("James", "rock", 30);
console.log(James.getAge());
// console.log(James.age);
// console.log(James.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public geLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("mac", "Sara", "pop", 25);
console.log(Sara.geLang());
// console.log(Sara.age)
////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} is playing ${this.instrument} by ${action}`;
  }
}

const eddie = new Guitarist("Eddie Van Halen", "Guitar");
console.log(eddie.play("tapping"));
//////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("John");
const jane = new Peeps("Jane");
const james = new Peeps("James");

console.log(Peeps.count);
console.log(john.id);
console.log(jane.id);
console.log(james.id);
//////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Van Halen", "Led Zeppelin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "AC/DC"];
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150];
*/

/*
////////////////////////////////////////////////////
// INDEX SIGNATURES & KEYOF ASSERTIONS //

// interface TransactionObj {
//   [index: string]: number;
// }

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTranscation: TransactionObj = {
  Pizza: -15,
  Books: -30,
  Job: 100,
};

console.log(todaysTranscation.Pizza);
console.log(todaysTranscation["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTranscation[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTranscation));
////////////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "John",
  GPA: 3.5,
  classes: [101, 102, 103],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof Student]);
});

const LogStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

LogStudentKey(student, "name");

////////////////////////////////////////////////////

// interface Incomes{
//   [key: string ]: number;
// }

type Streams = "salary" | "bonus" | "dividends";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 5000,
  bonus: 1000,
  dividends: 200,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
*/

/*
///////////////////////////////////////////////
//// GENERICS ////////
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("James"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "James" }));
console.log(isObj(null));

interface HasId {
  id: number;
}

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Jane";

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = [true, "hello", 15];
console.log(myState.state);
*/

///////////////////////////////////////////////
//// UTILITY TYPES ////////

//// Partial ////

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 100 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 100 });
// console.log(assignGraded);

//// Required  and READONLY////

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified(assignGraded)
recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "john" | "jane" | "james";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  john: "A",
  jane: "B",
  james: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  john: { assign1: 100, assign2: 90 },
  jane: { assign1: 90, assign2: 100 },
  james: { assign1: 0, assign2: 0 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 80,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable

type AllPossibleGrade = "Dave" | "James" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrade>;

// ReturnType

// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Utility Types", 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);
