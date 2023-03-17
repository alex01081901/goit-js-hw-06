 const withIdEl = document.querySelectorAll('#Categories');
 console.log(withIdEl);
const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

 withIdEl.forEach(value => {
  
   //  const firstWithIdEl = value.querySelector('ul'); 
   //     const itemEl = value.querySelector('h2');

   console.log(`Categories:${ value.firstElementChild.textContent}`);
   console.log(`Elements:${ value.lastElementChild.length}`);

});


//gm
