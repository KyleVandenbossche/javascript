const prompt = require('prompt-sync')();

let price = 0;


askAboutPizza();

function askAboutPizza() {
    const size = prompt("What size pizza would you like? (small, medium, or large)");
    let price = 0;
    
    switch (size) {
      case "small":
        price = 5;
        break;
      case "medium":
        price = 6;
        break;
      case "large":
        price = 7;
        break;
        default:
      return {
        size: null,
        price: null
      };

  }
}

askAboutSalad();

function askAboutSalad() {
    const saladsize = prompt("What size salad would you like? (small or large)");
    let price = 0;
    
    switch (saladsize) {
      case "small":
        price = 2;
        break;
      case "large":
        price = 4;
        break;
        default:
      return {
        size: null,
        price: null
      };
  }
}



function askAboutDelivery() {
    const size = prompt("Would you like delivery? (yes or no)");
    let price = 0;
    

    if (size === 'yes'){
        const address = prompt("What is your address?")
        price = price+10

    } else {
        return;
    };

    }

    console.log(askAboutDelivery(price));

 
    
  




















/*
function askAboutPizza(size, price){
    const answer = {
        Small: 5,
        Medium: 6,
        Large: 7,
    }
}

function askAboutSalad(){
    const saladanswer = {
        small: 2,
        large: 4,
    }
}
*/