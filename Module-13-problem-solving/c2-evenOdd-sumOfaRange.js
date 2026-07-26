// problem-1 : check if a number is Even or Odd.

function evenOddChecker(num){
    if(num%2===0){
        return "even";
    }else
        return "odd";
}
console.log("The number is : ",evenOddChecker(15));
console.log("The number is : ",evenOddChecker(50));





// problme-2 : Calculate the sum of a range of numbers(1 to N)

function sumOfRange(num){
    let sum=0;
    for(let i=0;i<=num;i++){
        sum = sum + i;
    }
    return sum;
}
let n=20;
console.log("The sum of 1 to",n , "is :", sumOfRange(n));
