const names = ["chandra", "kyle", "hank", "clover"];
console.log(names.join());


const cities = [
    {name: 'Maldives', country: 'South Asia', hasVisited: true},
    {name: 'Tokyo', country: 'Japan', hasVisited: false},
    {name: 'London', country: 'Europe', hasVisited: false},

];

// city is just a singular to the plural, it can be named anything
// city just takes what is in each curly bracket
const notVisited = cities.filter(city => city.hasVisited === false)

console.log(notVisited);

for (let city of cities){
    console.log(`${city.name}, ${city.country}`)
}


