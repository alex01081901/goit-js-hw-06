const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
 console.log(event.currentTarget.value);
    // nameLabel.textContent = event.currentTarget.value;
    nameLabel.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
    //  console.log(nameLabel.textContent = `aninimus`);
}