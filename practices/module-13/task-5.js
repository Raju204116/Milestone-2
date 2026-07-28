/* ✅Task 13-5A: Check for a Palindrome
Problem Statement:
Write a function isPalindrome that takes a string and returns true if it reads
the same forwards and backwards, otherwise false. Assume lowercase, no
spaces. */

// input: a string
// output: true/false
// return: a boolean 

function isPalindrome(str){
    let reversedStr= "";
    for(let letters of str){
        reversedStr =  letters + reversedStr;
    }
    // console.log(reversedStr);
    if(str===reversedStr){
        return true;
    }else
        return false;
}
if(isPalindrome("eye") === true){
    console.log("The string is Palindrome.");  
}else
    console.log("The string is not Palindrome.");

console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false    



/* ✅Task 13-5B: Find the Shortest Word in a Sentence
Matches lesson: 13-5 (String problems — split + loops)
Problem Statement:
Write a function findShortestWord that takes a sentence and returns the
shortest word in it. */

// input : a sentence (string)
// output : shortest word (string)
// returns : a string



function findShortestWord(str){
    let splitStr= str.split(" ");
    // console.log(splitStr);
    // console.log(splitStr[2].length); //4

    let shortestWord=splitStr[0];
    for(let i=1;i<splitStr.length;i++){
        if( splitStr[i].length < shortestWord.length){
            shortestWord=splitStr[i];
            // console.log(i,splitStr[i],shortestWord);
        }
            
    }
    return shortestWord;  
}
console.log("The shortest Word is :",findShortestWord("we are hero"));
console.log(findShortestWord("JavaScript is a fun language")); //Expected: "a"
console.log(findShortestWord("I love JavaScript, a lot!")); //I,a =>I