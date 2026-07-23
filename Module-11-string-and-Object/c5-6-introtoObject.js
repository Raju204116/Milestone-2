
/* 

✅✅What is an Object?
An object is a collection of key-value pairs.

//Think of it like a real-life student information card.

Student : 

Name    → Raju
Age     → 25
Country → Bangladesh
CGPA    → 3.75

//In JavaScript:

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh",
    cgpa: 3.75
};

Here:

name, age, country, cgpa → Keys (Properties)
"Raju", 25, "Bangladesh", 3.75 → Values


✅Creating an Object

//General Syntax:

let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};
{} → Curly braces create an object.
key → Property name.
value → Data stored in that property.
: → Separates the key and value.
, → Separates one key-value pair from another.

//ex:
let person = {
    name: "Rahim",
    age: 24,
    isStudent: true
};


✅Why Do We Need Objects?

Suppose you want to store information about a student.

//Using variables:
let name = "Raju";
let age = 25;
let country = "Bangladesh";

Problem: These variables are related but separate.



//Using an object:
let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};
Everything about the student is stored together.


✅Object vs Array

| Object                        | Array                 |
| ----------------------------- | --------------------- |
| Stores key-value pairs        | Stores ordered values |
| Uses `{}`                     | Uses `[]`             |
| Access by key                 | Access by index       |
| Order is not the main concern | Order matters         |



*/


//Different Data Types as Values

let person = {
    name: "Raju",              // String
    age: 25,                   // Number
    isStudent: true,           // Boolean
    skills: ["HTML", "CSS"],   // Array
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }                          // Nested Object
};
