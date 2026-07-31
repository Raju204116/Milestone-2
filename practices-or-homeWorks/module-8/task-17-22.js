/* ********************************** */
//Task-17 : ternary age detection

// let age =21;
// console.log(age >= 18 ? "Adult" : "Minor");




/* ********************************** */
/* Task-18 :  If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this
using a ternary operator. */


// let price=1500;
// console.log(price >1000 ? "Expensive" : "Affordable");



/* ********************************** */
//Task-19 : Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.

// let hasPermission = true ;
// // console.log(!hasPermission); //false
// console.log(!hasPermission ? "Access Denied" : "Successful" );





/* ********************************** */
//Task-20 : Using isOnline, use the NOT operator to print "User is offline"

// let isOnline = false ;
// // console.log(!isOnline);//true
// console.log(!isOnline ? "User is offline" : "online");





/* ********************************** */
/* Task-21 : Build a simple discount system: if cart total is above 1000 AND the user is a member, apply
a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use
logical operators combined with if-else if */

// let cartTotal = 1600 ;
// // let isMember =true ;
// let isMember =false ;
// let discount = 0;

// if(cartTotal >1000 && isMember){
//     discount = cartTotal * 0.2 ;
// }else if (cartTotal >1000){
//     discount = cartTotal * 0.1;
// }else {
//     discount = 0;
// }

// let finalPrice = cartTotal - discount;
// console.log("Discount:", discount);
// console.log("Final Price:", finalPrice);



/* ********************************** */
/* Task-22 : Build a simple login + role-check system that verifies username/password and shows a
different message based on admin/user role — combine everything from this module
(comparison, logical operators, if-else, ternary).  */


let userName = "raj4" ;
// let userName = "raj" ;
let password = 12345 ;

let isAdmin = true ;
// let isAdmin = false ;

if( userName === "raj4" && password === 12345){
    console.log(isAdmin ? "Welcome, Admin!" : "Welcome, User!");
}else {
     console.log("Please Login First");
}
   
    