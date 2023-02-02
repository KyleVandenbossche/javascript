for (let i=0; i<=10; i++){
    console.log(i);
}

for (let i=10; i>=0; i--){
    console.log(i);
}

let z = 10;
while (z>=1){
    console.log(z);
    z--;
    
}

let z = 1;
do {
    console.log(z);
     z++;
    } 
while(z<=10);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foods = ["ice cream", "cake", "pizza"]

// number is each of the numbers within the array
//for(let number of numbers){
   // console.log(number);
//}
for (let food of foods){
    console.log(foods[2]);
}

//foods.forEach(food => {console.log(food)});


const foundItem = foods.find((food) => food === "Pizza");
const foundItemArray = foods.filter((food) => food==="Pizza");
console.log(foundItemArray);
// console.log(foundItem);
// foods.forEach(())


// data from database
const students = ["Kyle", "Chandra", "Clover", "Hank"];

for (let students of students){
    console.log(student);
}