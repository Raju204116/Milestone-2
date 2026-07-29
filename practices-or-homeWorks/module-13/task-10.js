/* ✅✅Task 13-10: Final Homework Set
These four tasks combine everything from Module 13. 
Each must be solved as a function that returns a value, with an Input/Output/Returns comment on top. */




/* ✅13-10A: Perfect Square Checker
Problem Statement: Write a function isPerfectSquare that takes a number
and returns true if it is a perfect square, otherwise false. */

// input: a number
// output : true/false
// returns : a boolean

// my solution:
function isPerfectSquare(num){
    let perfectSqure=0;
    for(let i=0;i<=num;i++){
        // console.log("i=",i);
        if(i*i===num){
            perfectSqure=1;
            break;
        }else
            perfectSqure=0;   
    }
    if(perfectSqure===1){
        return true;
    }else
        return false;
}

// console.log(isPerfectSquare(25)); // Expected: true
// console.log(isPerfectSquare(20)); // Expected: false






// gemini solution:
function isPerfectSquare2(num) {
    if (num < 0) return false; // Negative numbers cannot be perfect squares

    for (let i = 0; i * i <= num; i++) {
        if (i * i === num) {
            return true; 
        }
    }
    return false; // If the loop finishes without returning true, it's not a perfect square
}

// console.log(isPerfectSquare2(25)); // true
// console.log(isPerfectSquare2(20)); // false
// console.log(isPerfectSquare2(1));  // true
// console.log(isPerfectSquare2(0));  // true (0*0 = 0)





/* ✅13-10B: Reverse the Word Order
Problem Statement: Write a function reverseWords that takes a sentence
and returns it with the order of the words reversed (the letters inside each
word stay the same) */

// input : a sentence (string)
// output: reversed words sentence
// return : a sentence (string)

function reverseWords(sentence){
    let mainStr = sentence.split(" ");
    // console.log(mainStr);
    
    let reversedStr="";
    for(let i=0; i<mainStr.length; i++){
        reversedStr = mainStr[i] + " " + reversedStr;
    }
    return reversedStr;
}
// console.log(reverseWords("Hello World"));






/* ✅13-10C: Remove Duplicate Values from an Array
Problem Statement: Write a function removeDuplicates that takes an array
of numbers and returns a new array where each value appears only once,
keeping the first occurrence. */

// input : an array
// output : an array without duplicate numbers
// return : an array

function removeDuplicates(arr){
    let uniqueArr=[];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    // console.log(newArr);
    return uniqueArr;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]








/* ✅13-10D: Invert an Object
Problem Statement: Write a function invertObject that takes an object with
unique values and returns a new object where each original value becomes a
key, and each original key becomes its value
 */
// input: an object
// output: a reversed object
// return : an object


function invertObject(obj){
    // let key=Object.keys(obj);
    // let value=Object.values(obj);
    let reversedObj={};

    for(let originalkey in obj){
        console.log("originalkey:",originalkey); //a
        // console.log("Obj[key] =",obj[originalkey]);   //obj[key] => obj["a"] =>1

        /* Assigning originalValues as revKey of revObj */
        let revKey=obj[originalkey]; //revKey= obj[orginalKey]  => obj["a"] =>1
        console.log("Obj[Originalkey] == revKey =",revKey);//1
        

        /* Assigning originalkey as revValues of revObj */
        // console.log("revObj[revKey] =",reversedObj[revKey]); //undefined
        reversedObj[revKey]=originalkey; //revObj[revKey] => revObj["1"]=originalkey   => revObj[1]=a  == revValue
        console.log("revObj[revKey] == revValue =",reversedObj[revKey] , "\n"); //a
    }

    return reversedObj;

}
let myObj={ a: 1, b: 2, c: 3 };
console.log(invertObject(myObj)); // Expected: { 1: "a", 2: "b", 3: "c" }
