const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const array = [];
ingredients.forEach(element => {
  const newElement = document.createElement('li');
  newElement.textContent = element;
  newElement.classList.add('item');
  array.push(newElement);
})
list.append(...array);
