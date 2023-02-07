



const add = (x, y) => x + y;
console.log(add(4,5));



const subtract = (x, y) => x - y;
console.log(subtract(4,5));



const multiply = (x, y) => x * y;
console.log(multiply(4,5));



const divide = (x, y) => {
    if (y === 0){
        console.log(`Error: Dividing by zero`)
    } else{
        return x/y;
    }
    
}

console.log(divide(100, 9001));