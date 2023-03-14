const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener(`input`, (event) => {
    console.log(event.currentTarget.value);
    const size = event.currentTarget.value;
    console.log(size);
    textEl.style.fontSize = `${size}px`;
});



// textEl.style.fontSize = `${inputEl.value}px`;

// const changeFontSize = (event) => {
//     textEl.style.FontSize = `${event.target.value}px`;

// }
// inputEl.addEventListener('input', changeFontSize);



// textInput.addEventListener('input', changeTextSize);

// function changeTextSize(event) {
    

//     if (event.currentTarget.value) {
//         textFont.style.fontSize = `"${event.currentTarget.value}px"`;
//         console.log(" value");

//     } else if (event.currentTarget.value) {
//         textFont.style.fontSize = `"${event.currentTarget.value}px"`;
//         console.log("value");
//     }
// }