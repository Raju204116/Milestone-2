// problem-15 : Return all even numbers , then their sum from an array.

function evenArr(arr){
    let evens=[];
    for(let elements of arr){
        if(elements%2===0){
            evens.push(elements)
        }
    }
    console.log(evens);

    let sum=0;
    for(let nums of evens){
        sum= sum+nums;
    }
    return sum;
}
console.log("The sum of the even array :",evenArr([10,13,15,20,26,30,31,85]));


