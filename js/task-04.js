const increment = document.querySelector('[data-action = "increment"]');
const decrement = document.querySelector('[data-action = "decrement"]');
const showValue = document.getElementById("value");

let counterValue = 0;

increment.addEventListener("click", btnIncrementHandler);
decrement.addEventListener("click", btnDecrementHandler);

function btnIncrementHandler(event) {
    console.log((counterValue += 1));
}

function btnDecrementHandler(event) {
    console.log((counterValue -= 1));
    showValue.textContent = counterValue;

}
//xnn