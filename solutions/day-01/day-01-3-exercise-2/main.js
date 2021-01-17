console.log(countries);
console.log(webTechs);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const textArray = text.split(/[\s,.]+/);
console.log(textArray);
console.log(textArray.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);
