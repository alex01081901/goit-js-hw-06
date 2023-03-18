

const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(value => {

   console.log(`Categories:${ value.firstElementChild.textContent}`);
   console.log(`Elements:${ value.lastElementChild.children.length}`);

});


 //  const firstWithIdEl = value.querySelector('ul'); 
   //     const itemEl = value.querySelector('h2');
 //  const firstWithIdEl = value.querySelector('ul'); 
   //     const itemEl = value.querySelector('h2');
//gm
