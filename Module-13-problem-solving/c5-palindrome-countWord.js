// problem-7 : check if a string is palindrome or not 
// palindrome => mainStr === reversedStr ;  (eye===eye)

function checkPalindrome(str){
    let reversed="";
    for(let i=str.length-1; i>=0;i--){
        reversed=reversed + str[i] ;
    }
    console.log("Reversed Strig : ", reversed);
    
    if(str===reversed){
        console.log("The string is a Palindrome.");
    }else
        console.log("not a palindrome.");
}
checkPalindrome("madam");
checkPalindrome("grute");
// since the function have no return value, that's why no need to console.log while calling the function.



// problem-8 : Count the num of words in a sentence 

function countWords(str){
    let wordsArr = str.split(" ");
    console.log(wordsArr);

    let count = wordsArr.length;
    return count;
   
}
console.log("No of words : ",countWords("I am grute."));
