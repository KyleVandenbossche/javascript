


// class Student {
//     name;
// //     age;

// //     constructor(constructorName, constructorAge){
// //         // console.log(`FROM THE CONSTRUCTOR`); // everytime you call new to a class the constructor runs
// //         this.name = constructorName;
// //         this.age = constructorAge;

// //     }
// // }

// // const kyle = new Student('Kyle', 33);

// // console.log(kyle);

// // // classes should be generally named after nouns 

// // class skier {
// //     skiSize;
// //     bootSize;

// //     youFell(){
// //         console.log(`You Fell`)
// //     }

// // }

// // const kyle = new skier();

// // kyle.skiSize = 175;
// // kyle.bootSize = 9;

// // console.log(kyle.youFell);





// class vehicle {

//     wheels;

//     // car, motorcycle
//     constructor(type){
//         this.wheels = type === 'car' ? 4 : 2;
//     }
// }

// const harley = new vehicle('motorcycle');
// console.log (harley)



class vehicle {

    make;
    model;
    numberOfWheels;
    needsService;

    // car, motorcycle
    constructor(make, model, type, miles){
        this.make = make;
        this.model = model;
        this.numberOfWheels = type === 'car' ? 4 : 2;
        this.needsService = miles > 20000;
    }
}

const harley = new vehicle('Harley', 'Road King', 'Motorcycle', 25000);
console.log (harley)