console.log(countries);
console.log(webTechs);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const textArray = text.split(/[\s,.]+/);
console.log(textArray);
console.log(textArray.length);

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);

shoppingCart = shoppingCart.filter(item => item !== 'Honey');
console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

const ethiopia = "Ethiopia"
if (countries.includes(ethiopia)) {
  console.log(ethiopia.toUpperCase());
} else {
  countries.push(ethiopia);
}
console.log(countries);

const sass = "Sass"
if (webTechs.includes(sass)) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push(sass);
  console.log(webTechs);
}
