

/*  Set a starting balance of $10.00
    Write a function to randomly return "H" or "T"
    Write a function to add a bet to a balance
    Write a function to subtract a bet from a balance
    Until the user runs out of money, or cashes out:
        Ask the user how much they would like to bet
        As the user if they would like heads or tails
        Call the function to reutrn the random flip
        If the user hits, add the bet to their balance
        If wrong, subrtract the bet to their balance
        Hint: Before they bet make sure they have enough money
*/


var prompt = require('prompt-sync')();
let balance = 10
const start = prompt('Would you like to gamble? (y or n)')

function subtractBet(balance, bet){
    return balance-=bet;
}
function addBet(balance, bet){
    return balance+=bet;
}

do{

    if(start === 'n'){
    console.log('Thanks for playing!');
    return;
    }

    const bet = parseInt(prompt('How much would you like to bet?'));
    const headsOrTails = prompt('Would you like to choose Heads or Tails? (H or T)');

    const flip = Math.random() < 0.5 ? 'H' : 'T';

    if (headsOrTails === flip){
    console.log(flip);
    balance = addBet(balance, bet);
    console.log(`You Win!`);
    

    } else {
    console.log(flip);
    balance = subtractBet(balance, bet);
    console.log(`You Lose, your new balance is $${balance}`);
   
    }
} while (balance >0)

