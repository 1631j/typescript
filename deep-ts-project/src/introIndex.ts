/*
let myName: string = "Bob";

let numberOfWheels: number = 4;

let isStudent: boolean = false;
*/

////////CUSTOM TYPES ////////
/*
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const person: Person = {
  name: "Bob",
  age: 25,
  isStudent: true,
};

const person2: Person = {
  name: "Alice",
  age: 24,
  isStudent: false,
};
*/

//////// NESTED Object TYPES ////////

/*
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

const person: Person = {
  name: "Bob",
  age: 25,
  isStudent: true,
};

const person2: Person = {
  name: "Alice",
  age: 24,
  isStudent: false,
  address: {
    street: "456 Elm St",
    city: "Springfield",
    country: "USA",
  },
};
console.log(person);
console.log(person2);

function displayInfo(person) {
  console.log(`${person.name} lives in ${person.address?.city}`);
}
displayInfo(person2);
*/

//////// ARRAY TYPES ////////
// let ages: number[] = [100, 101];
// ages.push(102);
// console.log(ages);
/*
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const person: Person = {
  name: "Bob",
  age: 25,
  isStudent: true,
};

const person2: Person = {
  name: "Alice",
  age: 24,
  isStudent: false,
};

let people: Person[] = [person, person2];


//////// UNIONS ////////
type User = {
  usename: string;
  role: "admin" | "member" | "guest";
};

type UserRole = "admin" | "member" | "guest";

let userRole: UserRole = "member";


//////// TYPE NARROWING ////
function getPizzaDetail(identifier: string | number) {
  if (typeof identifier === "string") {
    return menubar.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menubar.find((pizza) => pizza.id === identifier);
  }
}
  */

/*
type UserRole = "admin" | "member" | "guest";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "bob", role: "admin" },
  { username: "alice", role: "member" },
  { username: "eve", role: "guest" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);

  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }

  return user;
}
*/

/*
type User = {
  id: number;
  username: string;
  role: "admin" | "member" | "guest";
};

type UpdateUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "bob", role: "admin" },
  { id: nextUserId++, username: "alice", role: "member" },
  { id: nextUserId++, username: "eve", role: "guest" },
];

function updateUser(id: number, updates: UpdateUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found!");
    return;
  }
  Object.assign(foundUser, updates);
}

updateUser(1, { role: "member" });

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

addNewUser({ username: "charlie", role: "member" });
console.log(users);
*/

/*
const gameScores = [14, 21, 37, 56, 78, 99];
const favouriteThings = [
  "raindrops on rosses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Eve", age: 20 },
];

function getLastItem<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));
*/

//////// GENERICS DEEP DIVE ////////
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);

const strings = ["james", "njoroge"];
const firstString = getFirstElement(strings);

const input = document.querySelector<HTMLInputElement>(".input");
input?.value;

const a = [1, 2, 3, 4, 5];
a.map(() => {
  return "dhb ";
});
