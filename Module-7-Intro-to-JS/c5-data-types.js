
/*
✅What is a Data Type?
A data type tells JavaScript what kind of value is stored in a variable.



✅Types of Data in JavaScript

JavaScript has 8 data types. They are divided into 2 categories:


1. Primitive Data Types (7) :  These store a single value.

| Data Type | Example                 |
| --------- | ----------------------- |
| String    | `"Hello"`               |
| Number    | `25`, `3.14`            |
| Boolean   | `true`, `false`         |
| Undefined | `undefined`             |
| Null      | `null`                  |
| BigInt    | `12345678901234567890n` |
| Symbol    | `Symbol("id")`          |


2. Non-Primitive (Reference) Data Type : Objects store multiple related values.

Currently, you only need to know: Object
Arrays and functions are also objects in JavaScript.

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};



✅ Checking a Data Type (typeof)

let name = "Raju";
let age = 25;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

console.log(typeof undefined); //undefined
console.log(typeof null);  //object





✅Summary Table

| Value          | Data Type | `typeof` Result |
| -------------- | --------- | --------------- |
| `"Hello"`      | String    | `"string"`      |
| `25`           | Number    | `"number"`      |
| `3.14`         | Number    | `"number"`      |
| `true`         | Boolean   | `"boolean"`     |
| `false`        | Boolean   | `"boolean"`     |
| `undefined`    | Undefined | `"undefined"`   |
| `null`         | Null      | `"object"` ⚠️   |
| `123n`         | BigInt    | `"bigint"`      |
| `Symbol()`     | Symbol    | `"symbol"`      |
| `{}`           | Object    | `"object"`      |
| `[]`           | Array     | `"object"`      |
| `function(){}` | Function  | `"function"`    |







*/