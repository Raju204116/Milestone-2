/* ✅Task 13-4A: Count Vowels
Problem Statement:
Write a function countVowels that takes a string and returns how many
vowels it contains. Assume the string only contains lowercase letters, no
spaces. */

// input = a string
// output = count of vowels
// return = a number

function countVowels(str){
    let vowels="aeiou";
    let count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;

}
console.log("No of Vowels : ",countVowels("iamgrute"));
console.log(countVowels("javascript")); // Expected: 3





/* ✅Task 13-4B: Remove First and Last Character
Problem Statement:
Write a function removeFirstAndLast that takes a string and returns it with
the first and last character removed */

// input: a string
// output: the string without its first and last character 
// return: a string

function removeFirstAndLast(str){
    let newStr=str.slice(1,-1);
    // for (let i = 1; i < str.length - 1; i++) {
    //     newStr += str[i];
    // }
    return newStr;
}
console.log("Strig without first and last char :",removeFirstAndLast("hello"));
