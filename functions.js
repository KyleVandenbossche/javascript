/* Functions

Executing a code block on demand is widespread task in programming
Doing a task would either require the code to be written multiple times or a function to be implemented
Functions by default return a value 
*/

function greetClass(){
    console.log("Hello Kyle!");
}

greetClass(); // "Hello Kyle!" is logged, however the function returned undefined

// The return statement causes the function to immediately exit and returns the value to the line of code that called the function

/* Four types of functions

1. Function declaration: Declaration of function, they get hoisted, relatively similar to declaration variables (keyword, name)
2. Function expression: Function is the value of a variable, function is also not named, it is anonymous
3. Arrow function expression: Similar to function expressions, but require less code and handle referencing 'this' differently. 
4. Anonymous function: 
*/

function calculateArea(length, width){
    console.log(length*width);
    return length*width;
}

calculateArea(10,5); // 50 is logged, however the function returns the number 50



function feedPeople(person1, person2){
    return `${person1} and ${person2} are now fed.`;
}

arrow function:
const feedPeople = ((person1, person2) => `${person1} and ${person2} are now fed`)); 



// Return functions can return functions, Returning functions from functions is common
function success(){
    console.log("The number is even.")
}

function isEven(num){
    if (num % 2 === 0){
        return success;
    } else {
        return function(){
            console.log("The number is not even.")
        }
    }
}

let result = isEven(4); // value of result is now the success function

result(); // result is now a function and can be executed to see "The number is even"