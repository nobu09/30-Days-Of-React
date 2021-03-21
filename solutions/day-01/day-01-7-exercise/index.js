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

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const usersArray = Object.entries(users);
const skillful_user = usersArray.reduce((skillful_user, user) => {
  if (skillful_user[1].skills.length < user[1].skills.length) {
    skillful_user = user;
  }

  return skillful_user;
}, usersArray[0]);
console.log(skillful_user);

const loggedCount = usersArray.reduce((count, user) => {
  return user[1].isLoggedIn ? count + 1 : count;
}, 0);
console.log(loggedCount);

const over50Users = usersArray.reduce((result, user) => {
  return user[1].points >= 50 ? [...result, user] : result;
}, []);
console.log(over50Users);

const mern = (array) => {
  return (
    array.includes("MongoDB") &&
    array.includes("Express") &&
    array.includes("React") &&
    array.includes("Node")
  );
};

const mernUsers = usersArray.reduce((result, user) => {
  return mern(user[1].skills) ? [...result, user] : result;
}, []);
console.log(mernUsers);

// Set your name in the users object without modifying the original users object
users["Nobu"] = {
  email: "nobu@nobu.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Ruby", "Rails"],
  isLoggedIn: true,
  points: 30,
};
console.log(users);
