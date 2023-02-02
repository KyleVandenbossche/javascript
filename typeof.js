/* Typeof console log
Typeof console log
const language = "Javascipt";
const numberofStudents = 15;
const isHungry = false;
const assistants = ["Carly", "Ben", "Tim"];
const person = {name: "Kyle"};
const hello = () => "Hello";

/* console.log(typeof language); // String
console.log(typeof numberOfStudents); // Number
console.log(typeof isHungry); // Boolean
console.log(typeof assistants); // Object
console.log(typeof person); // Object
console.log(typeof hello); // Function */


//Checktype console log
//Checktype console log

const language = "Javascipt";
const numberofStudents = 15;
const isHungry = false;
const assistants = ["Carly", "Ben", "Tim"];
const person = {name: "Kyle"};
const hello = () => "Hello";

function checkType(data) { return 
Object.prototype.toString.call(data); }

console.log(checkType(language)); // String
console.log(checkType(numberofStudents)); // String
console.log(checkType(isHungry)); // String
console.log(checkType(assistants)); // String
console.log(checkType(person)); // String
console.log(checkType(hello)); // String