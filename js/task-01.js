const withIdEl = document.querySelectorAll('.item');
console.log(withIdEl);
const itemEl = document.querySelectorAll('ul');
console.log(itemEl);


console.log(`Number of categories: ${withIdEl.length}`);

withIdEl.forEach(value => {
  
   const firstWithIdEl = value.querySelector('h2'); 
   const itemEl = value.querySelector('ul');

   console.log(`Categories:${firstWithIdEl.textContent}`);
 console.log(`Elements:${itemEl.children.length}`);


});



