
/* 
✅1. for...in   (Most Common)

Syntax
for (let key in object) {
    // code
}

// Example:

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};
for (let key in student) {
    console.log(key);
}

// Output:
name
age
country


⚠️Get Both Key and Value

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};
for (let key in student) {
    console.log(key, student[key]);
}

// Output :
name Raju
age 25
country Bangladesh

//key contains the property name, and student[key] gets its value.



✅2. Using Object.keys() , then for...of

let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};

let keys = Object.keys(student);
for (let key of keys) {
    console.log(key);
}

// Output:
name
age
country


✅3. Using Object.values(),then for...of

let values = Object.values(student);
for (let value of values) {
    console.log(value);
}

// Output:

Raju
25
Bangladesh




⚠️⚠️ Remember

Arrays → Usually loop with for, for...of, or array methods.
Objects → Usually loop with for...in or Object.keys(), Object.values(), and Object.entries().




*/



let student = {
    name: "Raju",
    age: 25,
    country: "Bangladesh"
};
for (let key in student) {
    console.log(key, student[key]);
}