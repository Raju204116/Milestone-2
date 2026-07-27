
// problem - 13 : Loop through an object and show the property

let mess = {
    name: "rudroChaya",
    numOfFloor: 3,
    numOfStudent: 100,
    khala: 2,
    rent: 900
}

function loopInObj(obj) {
    console.log("Properties in the Object : ");
    for (let keys in obj) {
        console.log(keys, ":", obj[keys]);

    }
}
loopInObj(mess);


/* 
// Problem 14: You are given an object containing information about a student.

//---- Tasks
Create the object.
Print all keys.
Print all values.
Print each key-value pair (Use for...in ).
Count the total number of properties in the object.
Check if the object contains a property named "email".


//---- Expected input:
const student = {
name: "Utsho",
age: 25,
university: "DIU",
department: "CSE",
};

//---- Expected output:
name age university department

Utsho 26 DIU CSE

name: Utsho
age: 26
university: DIU
department: CSE

Total Properties: 4

Has Email: false

*/

const student = {
    name: "Utsho",
    age: 25,
    university: "DIU",
    department: "CSE",
};

console.log(Object.keys(student));
console.log(Object.values(student));

// console.log(Object.entries(student));
for(let keys in student){
    console.log(keys, ":", student[keys]);
}


let totalKey= Object.keys(student);
console.log("Total Properties :",totalKey.length);

console.log("Has Email :",totalKey.includes("email"));

