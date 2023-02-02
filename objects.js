/* Objects are data structure that allows us to store unorganized collections of data
An Object consists of two parts
State & Behavior, Data about the object (state) and methods that can act on that data (behavior)
There are ways to create and object, first option for creating object is object literal notation, second is using a constructor

Objects require curly braces (unlike arrays, which use square brackets)
Objects have key/value pairs (properties/values), separated by a colon
If there are multiple properties, a comma separates them

*/ 

const car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2019,
    color: "Black"

};

// Object can be accessed or altered using dot or bracket notation.
// Adding properties is done by dot or bracket, deleting properties can be done by using 'delete' keyword

const car = {  make: "Jeep", model: "Wrangler", year: 2019, color: "Black": };
console.log( car["make"]); // Ford is logged
console.log( car.model); // Wrangler is logged

car.ecoFriendly = true; // add ecoFriendly: true
delete car.color; // car no longer has a color key