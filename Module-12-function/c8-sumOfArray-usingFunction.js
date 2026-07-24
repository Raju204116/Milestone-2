
function sumOfArr(arr){
    console.log("Inside the function we got the array :",arr);

    let sum=0;
    for(let elements of arr){
        sum=sum+elements;
    }
    return sum;
}
const arr1=[10,15,17,20,35,50];
console.log("sum is : ",sumOfArr(arr1));

// evenNums
const arr2=[2,4,6,8,10,12,14,16,18,20];
console.log("sum is : ",sumOfArr(arr2));

// oddNums
const arr3=[1,3,5,7,9,11,13,15,17,19];
console.log("sum is : ",sumOfArr(arr3));