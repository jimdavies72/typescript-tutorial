// console.log("Hello");

// let age: number = 20;

// // age = "a" X

// if (age < 50) {
//   age += 10;
// }
// console.log(age);

// ** Types **

//let sales: number = 123_456_789; // is the same as....
let sales = 123_456_789;
// let course: string = "TypeScript";
let course = "TypeScript";
// let isPublished: boolean = true;
let isPublished = true;

// any -- should avoid using this as much as possible
let level;
level = 1;
level = "a";

const render = (document: any) => {
  console.log(document);
};

// Arrays

// let numbers: number[] = [1, 2, 3]
// let numbers = [1, 2, 3];
let numbers: number[] = [];
numbers.forEach((n) => n.toString);

// unknown
// never

// enum

// const small = 1;
// const medium = 2;
// const large = 3;

// by defaut 0 base, but you can set any number value you like...

const enum Size {
  Small = 1,
  Medium,
  Large,
}

// use const enum to ensure optimsed compilation

let mySize: Size = Size.Medium;
console.log(`My Size: ${mySize}`);

// tuple - fixed length array of particular type

// 1, 'James'

let user: [number, string] = [1, "James"];
user[0].toFixed;
user[1].toLowerCase;
// push will cause issue as this is valid JS
user.push(1);

// functions

function calculateTax(income: number, taxYear = 2022): number {
  //let x; // x is not used here so reports as issue.

  // adding the ? to taxYear parameter makes it optional

  if (taxYear < 2021) {
    return income * 1.2;
    // > 50_000 will return undefined here
  }
  return income * 1.3;
}

//calculateTax(10_000, 2021);

//objects

//a)
let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "James",
  retire: (date: Date) => {
    console.log(`retire date: ${date}`);
  },
};

//employee.id = 2;

//b)
let employee2: {
  id: number;
  name: string;
} = { id: 1, name: "" };

//c) type alias - custom types

type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let employee3: Employee = {
  id: 1,
  name: "James",
  retire: (date: Date) => {
    console.log(`retire date: ${date}`);
  },
};

// Union Types

const kgToLbs = (weight: number | string) => {
  //Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
};

kgToLbs(10);
kgToLbs("10kg");

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal types - limits values to variables

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// nullable types

function greet(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hello!");
  }
}

greet(null);

// Optional Chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) {
//   console.log(`cust birthday: ${customer.birthday}`);
// }

// Optional property access operator

console.log(`cust birthday: ${customer?.birthday?.getFullYear}`);

// useful when dealing with arrays
// Optional element access operator
// customers?.[0]

//Optional call operator
//let log: any = (message: string)=> console.log(message)
let log: any = null;

log?.("a");
