(() => {
    console.log('hello')

    const howManyInput = document.getElementById('number');
    const coinType = document.getElementById('coinType');
    const makeMoneyButton = document.getElementById('makeMoneyButton');
    const coinContainer = document.getElementById('coin-container');
    // console.log(howManyInput);
    // console.log(coinType);
    // console.log(makeMoneyButton);

    // function makeMoney(event) {
    //     event.preventDefault();
    //    const howManyInputValue = +howManyInput.value;
    //    for (let i = 0; i<howManyInputValue; i++){
    //     const newCoin= document.createElement('div');
    //     const newCoinP = document.createElement('p');
    //     newCoinP.innerText.coinType.value;
    //     newCoin.append(newCoinP);
    //     newCoin.classList.add('coin');
    //     coinContainer.append(newCoin);
    //    }
        

    // }

function makeMoney(event){
    event.preventDefault();
    const howManyInputValue = +howManyInput.value;
    for (let i = 0; i<howManyInputValue; i++){
        const newCoin = document.createElement("div");
        // newCoin.innerText = document.getElementById("coinType");
        coinContainer.appendChild(newCoin);
    }
}



makeMoneyButton.addEventListener('click', makeMoney);


} )();