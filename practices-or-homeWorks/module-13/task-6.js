/* ✅Task 13-6A: Find the Second Smallest Number
Problem Statement:Write a function findSecondSmallest that takes an array of numbers and
returns the second smallest distinct value */

// input: an array of number
// output: only the secondSmallest number
// return : a number

// method-1: two loop solution
function findSecondSmallest(arr) {
    let firstSmallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallest) {
            firstSmallest = arr[i];
        }
    }
    console.log("FirstSmallest :",firstSmallest);

    let secondSmallest = Infinity;   //Infinity represents a value that is greater than every finite number.
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < secondSmallest &&  arr[j]> firstSmallest ) {  
            secondSmallest = arr[j];
            // console.log("j=",j,  secondSmallest);
        }
    }
    return secondSmallest;
}
// console.log("SecondSmallest :",findSecondSmallest([10, 20, 2, 50,8, 30, 12]));



// method-2 : one loop solution
function findSecondSmallest2(arr){
    let firstSmallest=Infinity; //Infinity represents a value that is greater than every finite number.
    let secondSmallest=Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<firstSmallest){
            firstSmallest=arr[i];
        } 
        // console.log("i =",i);
        // console.log("first :",firstSmallest);
        
        if(arr[i]<secondSmallest && arr[i]>firstSmallest){
            secondSmallest=arr[i];
        }
        // console.log("second :",secondSmallest);

    }
    console.log("FirstSmallest :",firstSmallest);
    return secondSmallest;
}
console.log("SecondSmallest :",findSecondSmallest2([10, 20, 2, 50,8, 30, 12]));
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8



/* ✅Task 13-6B: Count Multiples of Three
Problem Statement:
Write a function countMultiplesOfThree that takes an array of numbers and
returns how many of them are divisible by 3. */


// input : an array
// output : count of divisable by 3
// return : a number

function countMultiplesOfThree(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3===0){
            count++;
        }
    }
    return count;

}
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10]));//expected : 3