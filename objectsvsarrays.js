



/* Objects require curly braces (unlike arrays which use square brackets [])
***Objects have key/value pairs (properties/values), separated by a colon
***if there are multiple properties, a comma separates them


const drink = {
    name: 'Gatorade',
    flavor: 'Grape',
    tastesGood: true,
    describe(){
        console.log(`Kyle is drinking a ${this.flavor} ${this.name}`) // this points to what variable is declared as *drink*
    },
    isgood(){
        //console.log('Tastes great!');
        //console.log('blah');

        if (this.tastesGood){
            console.log('Tastes great!')
        } else {
            console.log('Blah');
        }
    }

    drink.tastesGood = false;
};
*/


/*

// Create an object describing your car

const car = {
    make: 'Jeep',
    model: 'Wrangler',
    year: 2021,
    fuelAmount: 1,
    isRunning: false,
    displayinfo() {

       console.log(`${this.make} ${this.model} ${this.year}`);
    },
    updateFuel(amount) {
        this.fuelAmount = amount;
    },
    start(){
        this.isRunning = true;
        console.log(`The car is running`);
    }

};

console.log(car.isRunning);
car.start();
console.log(car.isRunning);

setTimeout(() => {
    car.updateFuel(.25);
}, 5000)

// prints hello every 1 second
setInterval(() => {
    console.log(`Hello`)
}, 1000);



displayInfo(){
    console.log(`${this.make} ${this.model} ${this.year}`);
}

updateFuel(chgFuel){
    
}

start(){
    console.log(`The car is running`)
}

stop(){

}
*/


// Arrays
/*
const names = ['kyle', 'sean', 'clover'];

console.log(names)

names.unshift('Kyle');
// names.splice(1, 0, "Juliet") // adds juliet at index 1

names.shift();
names.pop();
names.splice(1, 1);

console.log(names)

// console.log(names[names.length - 1]);

*/


// exercise array

/*
const numarray = [];

console.log(numarray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function isitinthere(){
    Math.floor(Math.random()*100);

    if (numarray === isitinthere){
        console.log(`Your number matches`)
    } else{
        console.log(`Your number does not match`)
    }
};

isitinthere();



const numbers = [];

numbers.push(2);
numbers.push(3);
numbers.push(6);

numbers.push(7,9);

console.log(numbers);


function isInArray(array, num){
    for(let i = 0; i < numbers.length; i++){
        console.log(`*** ${i}`);
    }

    if (num === array[i]){
        return true;
    } 
}
    return false;


const answer = isInArray(numbers, 5);

console.log(answer);


const prompt = require('prompt-sync')();

const names = [];

for(let i = 0; i < 5; i++){
    const name = prompt(`Add a name`);
    names.push(name);
}

console.log(names);
*/

const numbers = [49, 200, 19, 2000, 9001, 79, 420];

console.log(numbers.includes(3));

console.log(numbers.filter(number => number % 2 === 0));
// another way to write this ^^

const evens = [];
for(let i = 0; i < numbers.length; i++ ){
    if(numbers[i] % 2 === 0){
        evens.push(numbers[i]);
    }

}

console.log(evens);
