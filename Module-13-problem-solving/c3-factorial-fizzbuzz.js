
// problem-3 : Find the factorial of a number.
// n! = n*n-1*n-2*n-3......* (n-(n-1))  // n-n+1 => 1
// 5! = 5*(5-1)*(5-2)*(5-3)*(5-4)     //5-(5-1) =5-4=1


function factorial(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(6));



// problem-4: Find FizzBuzz from a range of number (1 to N).
//condition : if the number divisable by 3 then it is fizz, if divisable by 5 it is buzz, 
// if divisable by both it is fizzBuzz, otherwise print the number.

function fizzBuzz(num){
    for(let i=1;i<=num;i++){
        console.log("i =",i);
        if(i%3===0 && i%5===0){
            console.log("fizzBuzz");     
        }else if(i%3===0){
            console.log("fizz");      
        }else if(i%5===0){
            console.log("buzz");   
        }else
            console.log("Not a fizz, not a buzz :",i);    
    }
}
// console.log(fizzBuzz(15)); //it will print a undefined at the last line, because the function doesn't have any return.
fizzBuzz(15);