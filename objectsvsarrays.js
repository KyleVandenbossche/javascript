



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





/*
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
