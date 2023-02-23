(() => {

   
    
    const makeMoneyButton = document.getElementById('makeMoneyButton');
 

    makeMoneyButton.addEventListener("click", event => {
    event.preventDefault();
    const howManyInput = document.getElementById('number');
    const coinType = document.getElementById('coinType');
    const howManyInputValue = +howManyInput.value;

    for (let i = 0; i<howManyInputValue; i++){
        const newCoin = document.createElement("div");
        // newCoin.innerText = document.getElementById("coinType");

        newCoin.classList.add(coinType.value);
        document.body.append(newCoin);
    }
})}




)();