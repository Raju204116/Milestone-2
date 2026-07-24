

function evenArr(arr){
    console.log("Inside the function we got the array :",arr);

    const evens=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evens.push(arr[i]);
        }
    }
    return evens;


}
const arr1=[10,15,17,20,35,50];
console.log("Separated the Even nums : ", evenArr(arr1))

