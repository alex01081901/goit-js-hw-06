const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector('ul');
// console.log(list.classList);
// list.classList.add('item');

  const items = ingredients.map(value => {
  const listItem = document.createElement('li');
  listItem.textContent = value;
  return listItem;
  });

const body = document.querySelector('#ingredients');
body.append(...items);