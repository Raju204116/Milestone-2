
/* 


✅✅JavaScript Object Methods

✅1. Object.keys()
Returns all keys (property names) as an array.

//Syntax:
Object.keys(object)

//Example:
let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};
console.log(Object.keys(student));

//Output:
["name", "age", "country"]


✅2. Object.values()
Returns all values as an array.

//Syntax
Object.values(object)

//Example
console.log(Object.values(student));

//Output
["Raju", 25, "Bangladesh"]


✅3. Object.entries()
Returns key-value pairs as an array of arrays.

//Syntax
Object.entries(object)

//Example
console.log(Object.entries(student));

//Output :

[
  ["name", "Raju"],
  ["age", 25],
  ["country", "Bangladesh"]
]



⚠️Summary

| Method             | Returns                       |
| ------------------ | ----------------------------- |
| `Object.keys()`    | Array of keys                 |
| `Object.values()`  | Array of values               |
| `Object.entries()` | Array of `[key, value]` pairs |



✅4. delete
Removes a property from an object.

//Syntax
delete objectName.property;

//Example
let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};
delete student.age;
console.log(student);

//Output
{
    name: "Raju",
    country: "Bangladesh"
}



✅5. Nested Object
A nested object is an object inside another object.

//Example
let student = {
    name: "Raju",
    age: 25,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

⚠️Access Nested Properties

⭐Using dot notation:

console.log(student.address.city);
console.log(student.address.country);

// Output
Dhaka
Bangladesh

⭐Using bracket notation:

console.log(student["address"]["city"]);

// Output
Dhaka
Bangladesh







*/

//Mixed Example

let student = {
    name: "Raju",
    age: 25,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(student.name);              // Raju
console.log(student.address.city);      // Dhaka
console.log(student.skills[1]);         // CSS