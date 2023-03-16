const increment = document.querySelector('[data-action = "increment"]');
const decrement = document.querySelector('[data-action = "decrement"]');
const showValue = document.getElementById("value");

let counterValue = 0;

increment.addEventListener("click", btnIncrementHandler);
decrement.addEventListener("click", btnDecrementHandler);

increment.addEventListener("+", btnIncrementHandler);
decrement.addEventListener("+", btnDecrementHandler);

function btnIncrementHandler(event) {
    counterValue += 1;
    showValue.textContent = counterValue;

}

function btnDecrementHandler(event) {
    counterValue -= 1;
    showValue.textContent = counterValue;

}
//xnn