/* ✅Task 13-8A: List an Object's Keys
Problem Statement:
Write a function listKeys that takes an object and returns an array containing
its property names (keys). */

// input: an object
// output: an array of keys
// return : an array

let person ={ 
    name: "Sam", 
    age: 25, 
    city: "Dhaka"
    };

function listKeys(obj) {
    let keys= Object.keys(obj);
    return keys;
}

// console.log("List Of keys :",listKeys(person)); // Expected: ["name", "age", "city"]




/* ✅Task 13-8B: Get a Value or a Default
Problem Statement:
Write a function getValueOrDefault that takes an object, a key name, and a
default value, and returns the object's value for that key if it exists, otherwise
the default value */

// input : an object, a key, a default value
// output : the value at that key, or the default
// return : a string / number / any value


function getValueOrDefault(obj,key,defaultValue){
    // console.log(obj,key,value);
    
    let listOfkeys = Object.keys(obj);
    // console.log(listOfkeys);
    
    if(listOfkeys.includes(key)){
        // console.log(key);
        return obj[key];
    }else
        return defaultValue;
0.
}

let person2 = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person2, "age", 0)); // Expected: 25
console.log(getValueOrDefault(person2, "grade", "N/A")); // Expected:"N/A"