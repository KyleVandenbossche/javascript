(() => {
    console.log('hello')

    const howManyInput = document.getElementById('number');
    const coinType = document.getElementById('coinType');
    const makeMoneyButton = document.getElementById('makeMoneyButton');
    const coinContainer = document.getElementById('coin-container');
    // console.log(howManyInput);
    // console.log(coinType);
    // console.log(makeMoneyButton);

    function makeMoney(e) {
        e.preventDefault();
       const howManyInputValue = +howManyInput.value;
       for (let i = 0; i<howManyInput; i++){
        const newCoin= document.createElement('div');
        const newCoinP = document.createElement('p');
        newCoinP.innerText.coinType.value;
        newCoin.append(newCoinP);
        newCoin.classList.add('coin');
        coinContainer.append(newCoin);
       }
        

    }

makeMoneyButton.addEventListener('click', makeMoney)


} )();