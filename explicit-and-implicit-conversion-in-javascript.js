/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;//No change was made to this line
console.log("The result is: " + result);//JavaScript is automatically changing string to integer to process mathematical operation

let isValid = Boolean("");//Made the value of "isValid" empty to make it false.
if (isValid) {
    console.log("This is valid!");
}
else {
  console.log("This is not valid")
}

//Added "else" to show that the variable "isValid" is false

let age = "25";
let totalAge = Number(age) + 5; //Used function "Number" to convert the string to integer
console.log("Total Age: " + totalAge);

//Implicit Type Conversion Example 1a

let scoreOne = 50
let scoreTwo = 40

console.log("Score: " + 50 + 40)

// Edge Case 1a

let edgeCase1a = "result" - 4

console.log(edgeCase1a)//NaN

// Explicit Type Conversion Example 2b

let itemAvailable = {
  "Milk":1,
  "Bread":0,
  "Yogurt":2
}

let isMilkAvailable = Boolean(itemAvailable["Milk"])//Here I converted the value of "Milk" to boolean

if (isMilkAvailable == true) {
  console.log("Milk is available")
}
else {
  console.log("Milk is not available")
}