/* Parameters 

When a function needs any information to complete a task, parameters get defined within the declaration
Parameters act like variables; however they are not variables
Parameters are placeholders

Arguments: When a function is called or executed, data may get passed into the function as arguments, arguments used become assigned to parameters for use within the function

Default Parameters may also have default values, if the function executes with an undefined argument, the default parameter kicks in. */

const feedPeople = (person1, person2 = "Carol")
=> `${person1} and ${person2} are now fed.`;

feedPeople("Steve"); // "Carol" is assigned to person2


// Rest parameter: bundle up all of the remaining arguments of the function in an array, specified using 3 dots

function myFunction(param1, param2, ...others){
    //code here
}

// This function using the rest parameter and reduce, allows the function to use any amount of arguments
function addNumbers(...numbers){
    return numbers.reduce((prev, next) => prev + next);
}
addNumbers(1,2); // returns 3
addNumbers(1,2, 3, 4, 5); // returns 15


// Rest parameter must be the last parameter assigned in the function, rest of the arguments get bundled in an array
function sayHello (person1, person2, ...everyoneElse){
    console.log(`Hello ${person1}`); // Hello Chandra
    console.log(`Hello ${person2}`); // Hello Kyle
    console.log(`Hello ${everyoneElse[2]}`); // Hello Hank
    console.log(`Hello ${everyoneElse[3]}`); // Hello Clover
}

sayHello("Chandra", "Kyle", "Hank", "Clover",);