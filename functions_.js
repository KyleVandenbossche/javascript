// allows us to write reusable code

function sayHello(){
    console.log("Hello!");
}


sayHello();


function sayhi(name){
    console.log(`Hello ${name}`);
}


sayhi('Kyle');
sayhi(`Chandra`);
sayhi(`Hank`);
sayhi(`Clover`);


// write a function to double a number
// one argument


function doubleNumber(num){
    num = num*num;
    console.log(`Your doubled Number: ${num}`)
}

doubleNumber(5);
doubleNumber(50);
doubleNumber(19);
doubleNumber(99);
doubleNumber(13);


function add(a, b){
    console.log(a+b);
}

add(5, 5);


// return is how we specify outputs to a function

function double(num){
    return num*2;
}

console.log(double(2));


// return the sum of two numbers
function sum(num){
    return num+num;
}

console.log(sum(100));


// display the sum of two numbers
function sum(a, b){
    console.log(a+b)
}

sum(10, 99);


function name(x){
    return x;
}

console.log("Kyle");

function square(x){
    x = x*x;
    return x;
}

console.log(square(19));


function info(name, age) {
    return `${name} is ${age} years old`
     //console.log(`${name} is ${age} years old`);
 
   }
  
   console.log(info("Kyle", 33));
