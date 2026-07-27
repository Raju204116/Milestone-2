
// problem-5 : Reverse a string 

function reverseString(str){
    let reversed="";
    for(let letters of str){
        reversed = letters + reversed ;
    }
    return reversed;
}
console.log(reverseString("I am grute."));

// method-2
function reversedString2(str){
    let reversed2="";
    for(let i=str.length-1;i>=0;i--){
        reversed2=reversed2+str[i];
    }
    return reversed2;
}
console.log(reversedString2("I am grute."));







// problem-6 : Count vowels in a string

function countVowels(str){
    // let vowels="aeiou";
    let vowels="aeiouAEIOU";
    let count=0;
    for(let i=0;i<=str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Programming Hero"));
console.log(countVowels("I am grute"));

