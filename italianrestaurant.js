const prompt = require('prompt-sync')();

const price = 0;


askAboutPizza();

function askAboutPizza() {
    const size = prompt("What size pizza would you like? (small, medium, or large)");
    let price;
    
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
    let price;
    
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

askAboutDelivery();

function askAboutDelivery() {
    const size = prompt("Would you like delivery? (yes or no))");
    let price;
    

    if (size === 'yes'){
        const address = prompt("What is your address?")
        price = price+10
        console.log(price);

    } else {
        return;
    };

    }

 
    
  




















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