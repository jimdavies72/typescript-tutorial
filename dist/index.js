"use strict";
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
level = 1;
level = "a";
const render = (document) => {
    console.log(document);
};
let numbers = [];
numbers.forEach((n) => n.toString);
let mySize = 2;
console.log(`My Size: ${mySize}`);
let user = [1, "James"];
user[0].toFixed;
user[1].toLowerCase;
user.push(1);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2021) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "James",
    retire: (date) => {
        console.log(`retire date: ${date}`);
    },
};
let employee2 = { id: 1, name: "" };
let employee3 = {
    id: 1,
    name: "James",
    retire: (date) => {
        console.log(`retire date: ${date}`);
    },
};
const kgToLbs = (weight) => {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hello!");
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(`cust birthday: ${customer === null || customer === void 0 ? void 0 : customer.birthday}`);
//# sourceMappingURL=index.js.map