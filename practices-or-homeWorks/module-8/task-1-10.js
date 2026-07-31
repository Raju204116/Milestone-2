
/* ********************************** */
/* Task-1  : Take two variables price1 and price2, and compare them using all comparison operators 
(==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.  */

// let price1=30;
// let price2=60;

// //==
// if(price1==price2){
//     console.log(`They are equal.`)
// }else
//     console.log("They are not equal");
// //===
// if(price1===price2){
//     console.log(`They are equal.`)
// }else
//     console.log("They are not equal");

// //!=
// if(price1!=price2){
//     console.log(`They are not equal.`)
// }else
//     console.log("They are  equal");

// // !==
// if(price1!==price2){
//     console.log(`They are not equal.`)
// }else
//     console.log("They are  equal");
// // >
// if(price1>price2){
//     console.log(`Price1 is greater.`)
// }else
//     console.log("Price2 is greater");

// // <
// if(price1<price2){
//     console.log(`Price1 is smaller.`)
// }else
//     console.log("Price2 is smaller");

// // >=
// if(price1>=price2){
//     console.log(`Price1 is equal or greater than p2.`)
// }else
//     console.log("Price2 is equal or greater than p1.");

// // <=
// if(price1<=price2){
//     console.log(`Price1 is equal or smaller than p2.`)
// }else
//     console.log("Price2 is equal or smaller than p1.");





/* ********************************** */
//Task-2 : Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess. 

// // ==
// if("5"==5){ //compares only value
//     console.log("They are equal");
// }else
//     console.log("not equal");

// // ===
// if("5"===5){  //compares data type and value
//     console.log("They are equal");
// }else
//     console.log("not equal"); 



/* ********************************** */
//Task-3 : Create a variable isRaining (true/false). If it is true, print "Take an umbrella".

// // let isRaining = true;
// let isRaining = false;

// if(isRaining){
//     console.log("Take an umbrella.")
// }else
//     console.log("No need to umbrella.")







/* ********************************** */
//Task-4 : Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else). 


// let stock=5;

// //use only if
// if(stock===0){
//     console.log("out of stock.")
// }





/* ********************************** */
//Task-5 :  Take a number variable and check whether it is positive or negative (using if-else). 

//positive or negative

// // let num=50
// let num=-50

// if(num>=0){
//     console.log("The number is positive.")
// }else
//     console.log("The number is negative.")




/* ********************************** */
//Task-6 : Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
//leap year

// let year=1900

// if(year%400===0 || year%4===0 && year%100 !==0){
//     console.log("Leap year");
// }else
//     console.log("Not a Leap year");

// //NB : year%100 !==0  is very important , If we don't use this condition then 1900 will be a leap year, but actually it's not a leap year.





/* ********************************** */
//Task-7 : Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed". 

// let speed=75;

// if(speed>80){
//     console.log("OverSpeeding");
// }else
//     console.log("Normal Speed")




/* ********************************** */
//Task-8 :  Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

// let age=21;
// hasTicket = false;

// if(age>18 && hasTicket){
//     console.log("Entry allowed.");
// }else
//     console.log("Not Allowed")







/* ********************************** */
//Task-9 :  Using isWeekend and isHoliday, print "No work today" if either one is true (use ||). 

// let isWeekend = true;
// isHoliday = false;

// if(isWeekend || isHoliday){
//     console.log("No work today.")
// }






/* ********************************** */
//Task-10 :  Build a simple login system — print "Login successful" only if both username and password are correct. 

let userName ="raj4";
let password = 12345 ;

if(userName==="raj4" && password === 12345){
    console.log("Login Successfull")
}







