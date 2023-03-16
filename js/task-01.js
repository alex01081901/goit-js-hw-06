const withIdEl = document.querySelectorAll('#Categories');
console.log(withIdEl);
const itemEl = document.querySelectorAll('.item');
console.log(itemEl);


console.log(`Number of categories: ${itemEl.length}`);

withIdEl.forEach(value => {
  
   // const firstWithIdEl = value.querySelector('h2'); 
   // const itemEl = value.querySelector('ul');

   console.log(`Categories:${firstWithIdEl.firstElementChild.textContent}`);
   console.log(`Elements:${firstWithIdEl.lastElementChild.length}`);

});


//gm
