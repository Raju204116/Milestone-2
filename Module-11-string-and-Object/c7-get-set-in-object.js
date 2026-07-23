
/* 
✅❌⚠️📌⭐

✅✅Accessing Properties (get value)

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};


✅1. Dot Notation 

console.log(student.name);
console.log(student.age);

Output:
Raju
25


✅2. Bracket Notation

console.log(student["name"]);
console.log(student["age"]);

Output:
Raju
25

⚠️dot notation can't access space or any other special character.
In this situation we must need bracket[].

let name = {
    "first name": "Raju",
    "last_name" : "Ahammed"
};

// console.log(name.first name); //error
console.log(name["first name"]); // Raju

// console.log(name.last_name); //error
console.log(name["last_name"]); // Ahammed






✅Adding a New Property (Set value)

student.cgpa = 3.75;
console.log(student);

Output:
{
    name: "Raju",
    age: 25,
    country: "Bangladesh",
    cgpa: 3.75
}


✅Updating a Property

student.age = 26;
console.log(student.age);

student['name']="Raju Ahammed";
console.log(student["name"]);

Output: 
26
Raju Ahammed


✅Set key as a variable & get the value of that key

const key1='country';
// console.log(student.key1);  //undefined
console.log(student[key1]);



*/



let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};


student.age = 26;
console.log(student.age);

student['name']="Raju Ahammed";
console.log(student["name"]);

// set key as a variable
const key1='country';
// console.log(student.key1);
console.log(student[key1]);





// key name with space:

let name = {
    "first name": "Raju",
    "last_name" : "Ahammed"
};

// console.log(name.first name); //error
console.log(name["first name"]); // Raju

// console.log(name.last_name); //error
console.log(name["last_name"]); // Ahammed

