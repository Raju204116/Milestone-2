
/* 

✅Task 5.1 — Build a Profile Object
Create an object student with these properties: name, age, grade, and isEnrolled.
● Log the whole object.
● Log just the name property using dot notation.

*/


// let student ={
//     name : "Raju",
//     age : 25,
//     grade : "A",
//     isEnrolled : true
// }
// console.log(student);  //{ name: 'Raju', age: 25, grade: 'A', isEnrolled: true }
// console.log(student.name); //Raju




/* ✅Task 5.2 — Watch the Video Concept
After watching the "What is an Object" video, write 2–3 sentences (as a comment in your
code) explaining an object in your own words, using a real-life analogy (not a car or a
person — get creative!).
 */

// An object is a collection of related data stored as key-value pairs.
// An object can hold different types of values, such as strings, numbers, booleans, arrays, and even other objects
// It helps organize related data, makes code more reusable, readable, and easier to maintain.

//real-life-analogy : 
//  let laptop = {
//      name : "HP",
//      version : "EliteBook",
//      color: "gray",
//      price : 50000,

//  } 



/* ✅Task 6.1 — Dot vs Bracket Notation
let car = { brand: "Toyota", model: "Corolla", year: 2022 };
● Get brand using dot notation.
● Get model using bracket notation.
● Add a new property color: "blue" using bracket notation.
● Update year to 2023 using dot notation.
 */

// let car = {   
//     brand: "Toyota", 
//     model: "Corolla", 
//     year: 2022 
// };

// console.log(car.brand); //Toyota
// console.log(car["model"]); //Corolla
 
// car["color "] ="blue" ; 
// car.year = 2023;
// console.log(car); //{ brand: 'Toyota', model: 'Corolla', year: 2023, 'color ': 'blue' }








/* ✅Task 7.1 — Keys and Values
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
● Get an array of all keys
● Get an array of all values
● Delete the pages property using delete.
 */

// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };

// console.log(Object.keys(book));  //[ 'title', 'author', 'pages' ]
// console.log(Object.values(book)); //[ 'The Hobbit', 'Tolkien', 310 ]

// console.log(Object.entries(book)); //[ 'title', 'The Hobbit' ],[ 'author', 'Tolkien' ],[ 'pages', 310 ]

// delete book.pages ;
// console.log(book); //{ title: 'The Hobbit', author: 'Tolkien' }



/* ✅Task 7.2 — Nested Objects
let user = {
    username: "coder123",
    address: {
        city: "Austin",
        zip: "78701"
    }   
}
● Log the city using dot notation chaining.
● Add a country property inside the address.
● Delete the zip property from the nested object.

 */

// let user = {
//     username: "coder123",
//     address: {
//         city: "Austin",
//         zip: "78701"
//     }   
// }

// console.log(user.address.city); //Austin

// user.address.country = "bd";
// console.log(user); //{username: 'coder123',address: { city: 'Austin', zip: '78701', country: 'bd' }}

// // delete user.address.zip;   //same output
// // delete user.address["zip"]; //same output
// delete user["address"]["zip"] ; //same output
// console.log(user); //{ username: 'coder123', address: { city: 'Austin', country: 'bd' } }

// console.log(user['address']["country"]); //bd
// console.log(user["address"].city); //Austin



/* ✅Task 8.1 — Loop Through Properties
let scores = { math: 90, science: 85, art: 95 };
● Use a for...in loop to log each key and value like: math: 90.
● Calculate the average of all values in the loop.

*/

// let scores = { math: 90, science: 85, art: 95 };
// let sum=0;
// for(let keys in scores){
//     // console.log(keys); //math, science, art
//     console.log(keys , ":", scores[keys]);  
//     // normally : console.log(person["name"]); => raju
//     //sameway : score[keys]; => score["math"];   and  score["math"]; =>90
//     sum= sum+scores[keys];  
// }
// let numOfkeys= Object.keys(scores);
// let avg= sum/ (numOfkeys.length)   //NB: object doesn't have .length method
// console.log("Avg is : ", avg);




/* ✅Task 9.1 — Contact Book
Build a small "contact" system:
let contact = {
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
};

1. Convert the email to lowercase and update the object.
2. Loop through the contact object and print each key-value pair.
3. Add a new property favoriteWords: [] (an array) — push 3 words to it.
4. Reverse the name string just for fun using one of your three reverse functions from
Task 4.1.
5. Check if the email includes "@email.com" (case-insensitive) and log a confirmation
message. */

let contact = {
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
};

// num1
//console.log(contact.email.toLowerCase()); //alex@email.com
// console.log(contact); //{ name: 'Alex Johnson', email: 'ALEX@EMAIL.COM', phone: '555-1234' }
//NB: string is immutable, that's why  the lowercase only printed, but  the original did not change

//but we can keep the converted/ updated value by assigning it to the object
contact.email = contact.email.toLowerCase();   
console.log(contact); // { name: 'Alex Johnson', email: 'alex@email.com', phone: '555-1234' }





// num2
for(let keys in contact){
    console.log(keys, ":", contact[keys]);
}


// num3
contact.favoriteWords=[];
contact.favoriteWords.push("Win", "money", "enjoy");
console.log("After adding favoriteWords : ",contact);



//num4
// let nameStr= Object.values(contact.name);
let nameStr= contact.name;
console.log(nameStr);

let reversed="";
for(let letters of nameStr){
    reversed= letters+reversed; //don't use nameStr[letters], because it's a property of for..in
}
console.log("Reversed Name : ",reversed);



//num5
let emailChk= contact.email.toLowerCase();
if(emailChk.includes("@email.com")){
    console.log("Login Confirmed");
}