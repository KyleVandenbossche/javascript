/* Loops 

Allow code blocks to repeat over and over again
Control structures have statements that perform specific actions when used in a loop. 
Break: used to break out of a control structure
continue: used to skip to the next iteration

Loop
"For": Repeatedly executes a block of code using a counter variable
"Do..While": Repeats until the condition evalutes to false, Always executes at least once
"While": Repeats until the condition evaluates to false. May not execute at all if condition starts out false
"For..in": Iterates over keys of an object (including arrays)
"For..of": Iterates over values of an object (including arrays)

*/

//For loop

for (initialization; CSSConditionRule; final-expression){
    // repeating things
}

for (let i = 0; i<=10; i++){
    console.log(i);
}

//While loop
while(condition){
    //repeating things
}

let a=0, j=0;
while (a<30) {
    a++;
    j +=a;
}

//do..while

do{
    //repeating things
}
while(condition);

let userPass = null;
do{
    userPass = prompt("What is your password");

} while (userPass !=="secret");


//for..of loops
let languages = ["Java", "Javascript", "Ruby", "Python", "C#", "PHP", "HTML", "CSS"];
for (let language of languages){
    console.log(language);
}


//for...in loops

const grandCircus = { location: "Detroit", rooms: 6, colors: ["teal", "orange", "charcoal"]};
for (let prop in grandCircus){
    console.log(prop);
}

let i = 0;

while (true){
    i++;

    if(i%2===0){
        continue; // this will skip every even number, if 'i' is divisible by 2 it pushes to continue back up into i++ incremental forever
    }
}

