/* ✅Task 13-3A: Product of Digits
Problem Statement:
Write a function productOfDigits that takes a positive whole number and
returns the product of its individual digits.
 */
// input: a number
// output: a number of multiplying digits
// return: a number 


function productOfDigits(num) {
    let numStr = num.toString();
    let product = 1;
    for (let digits of numStr) {
        product = product * digits;  //JavaScript automatically converts the strings to numbers when using the * operator.  
        // This is called implicit type conversion (type coercion).
    }
    return product;

}
// console.log("Product of digits :",productOfDigits(123)); // Expected: 6
// console.log(productOfDigits(4040)); 


// method-2 (best)
function productOfDigits2(num) {
    let product = 1;
    while (num !== 0) {
        let lastdigit = num % 10;
        product = product * lastdigit;
        num = Math.floor(num / 10);
    }
    return product;

}
// console.log("Product of digits2 :",productOfDigits2(123)); // Expected: 6
// console.log(productOfDigits2(4040));  // Expected: 0




/* ✅Task 13-3B: Odd Numbers Up To N
Problem Statement:
Write a function getOddNumbers that takes a number n and returns an array of 
all odd numbers from 1 to n (inclusive).

 */

// input : a number
// output : an array of odd nums
// return : an array

function getOddNumbers(num) {
    let oddNums = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            oddNums.push(i);
        }
    }
    return oddNums;

}
console.log("Array of Odd Nums :",getOddNumbers(10)); // Expected: [1, 3, 5, 7, 9]
