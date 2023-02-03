var prompt = require('prompt-sync')();

function getRandomDirection(){
    return Math.random() < 0.5 ? 'High' : 'Low';

}



function shoot(playerss){
const onshoot = prompt(`Player ${player}, or shoot low? (H or L)`)

if (onshoot === getRandomDirection()){

    console.log(`You scored a goal!`)
} else {

    console.log(`You missed!`)
}

}

const numberOfPlayers = +prompt('How many players are in the shootout? (1, 2, 3, 4)');
const players = [];

for(let i = 1; i <= players; i++){
    const name = prompt(`Player ${i} name: `);

    players.push(name);
}

for (let i = 0; i < numberOfPlayers.length; i++){
    shoot(players[i]);
}