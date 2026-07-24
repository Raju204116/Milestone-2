
/* 

✅✅ What are Parameters?
A parameter is a variable listed in a function definition that receives data when the function is called.

Think of a parameter as a placeholder for a value.

✅Syntax
function functionName(parameter1, parameter2) {
    // code
}

Example:

function greet(name) {
    console.log("Hello " + name);
}


✅What is an Argument?
When calling a function, the actual value you pass is called an argument.

function greet(name) {   //parameter
    console.log("Hello " + name);
}
greet("Raju"); //argument

// here:
name → Parameter
"Raju" → Argument

✅Parameter vs Argument

| Parameter                | Argument                         |
| ------------------------ | -------------------------------- |
| Placeholder              | Actual value                     |
| Declared in the function | Passed when calling the function |


✅✅Types of parameter


✅No Parameter

function welcome() {
    console.log("Welcome Raju!");
}
welcome();



✅Single Parameter

function square(num) {
    console.log(num * num);
}
square(5);

Output: 25


✅Multiple Parameters

function add(a, b) {
    console.log(a + b);
}
add(10, 20);

Output : 30
Here:
a → 10
b → 20


✅Three Parameters

function student(name, age, country) {
    console.log(name);
    console.log(age);
    console.log(country);
}
student("Raju", 25, "Bangladesh");

Output : 
Raju
25
Bangladesh

✅Default Parameters
You can give a parameter a default value.

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();
greet("Raju");

Output:
Hello Guest
Hello Raju

⚠️If no argument is passed, "Guest" is used.



✅Parameter Order 

function introduce(name, age) {
    console.log(name, age);
}
introduce("Raju", 25);

Output: Raju 25


//If you change the order:

introduce(25, "Raju");
Output: 25 Raju

⚠️The function matches arguments by position, not by name.





✅What if Fewer Arguments Are Passed?

function add(a, b) {
    console.log(a, b);
}
add(10);

Output:
10 undefined

⚠️Because no value was provided for b.



✅What if More Arguments Are Passed?

function add(a, b) {
    console.log(a + b);
}
add(10, 20, 30);

Output:
30

⚠️The extra argument (30) is ignored unless you explicitly handle it.



✅Parameters with return 

function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 6);  //(set return value as a variable)
console.log(result);

Output : 30







✅









*/