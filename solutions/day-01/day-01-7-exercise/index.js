// Exercise level1
const dog = {};
console.log(dog);

dog.name = "Iro";
dog.legs = 2;
dog.color = "white";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "Italian Greyhound";
dog.getDogInfo = function () {
  return `name: ${this.name}, legs: ${this.legs}, color: ${this.color}, age: ${
    this.age
  }, bark: ${this.bark()}, breed: ${this.breed}`;
};
console.log(dog.getDogInfo());
