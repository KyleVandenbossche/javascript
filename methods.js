/* Methods are similar to functions but are more specific
Methods belong to objects which allow objects to perform actions
- Return some information about the object
- Change the state of the object */ 

const car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2019,
    color: "Black"
    describe(){
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
    getYear(){
        return this.year;
    }
    paintTheCar(color){
        this.color = color;
        console.log(`The car is now ${this.color}.`);
    }
};

car.describe();
console.log( car.getYear());
car.paintTheCar("Orange");