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

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// const usersArray = Object.entries(users);
// const skillful_user = usersArray.reduce((skillful_user, user) => {
//   if (skillful_user[1].skills.length < user[1].skills.length) {
//     skillful_user = user;
//   }

//   return skillful_user;
// }, usersArray[0]);
// console.log(skillful_user);

// const loggedCount = usersArray.reduce((count, user) => {
//   return user[1].isLoggedIn ? count + 1 : count;
// }, 0);
// console.log(loggedCount);

// const over50Users = usersArray.reduce((result, user) => {
//   return user[1].points >= 50 ? [...result, user] : result;
// }, []);
// console.log(over50Users);

// const mern = (array) => {
//   return (
//     array.includes("MongoDB") &&
//     array.includes("Express") &&
//     array.includes("React") &&
//     array.includes("Node")
//   );
// };

// const mernUsers = usersArray.reduce((result, user) => {
//   return mern(user[1].skills) ? [...result, user] : result;
// }, []);
// console.log(mernUsers);

// // Set your name in the users object without modifying the original users object
// users["Nobu"] = {
//   email: "nobu@nobu.com",
//   skills: ["HTML", "CSS", "JavaScript", "React", "Ruby", "Rails"],
//   isLoggedIn: true,
//   points: 30,
// };
// console.log(users);

// // 5.Get all keys or properties of users object
// console.log(Object.keys(users));

// // 6.Get all the values of users object
// console.log(Object.values(users));

// Exercise level3
const personAccount = {
  firstName: "nobu",
  lastName: "tanaka",
  incomes: 300000,
  expenses: 200000,
  totalIncome: function () {
    return this.incomes;
  },
  accountInfo: function () {
    return this.incomes;
  },
  addIncome: function (add) {
    this.incomes += add;
  },
  addExpense: function (add) {
    this.expenses += add;
  },
  accountBalance: function () {
    return this.incomes - this.expenses;
  },
};

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(name) {
  let targetUser = users.find((user) => user.username === name);

  if (targetUser) {
    console.log("You have already had an account.");
    console.log(targetUser);
  } else {
    users.push({
      username: name,
    });
    console.log(users);
  }
}

// let name = prompt("Enter your name");
// signUp(name);

function signIn(name, password) {
  let user = users.find(
    (user) => user.username === name && user.password === password
  );

  if (user) {
    console.log(`Hello, ${name}! You have logged in.`);
  } else {
    console.log("Sorry, we couldn't find your name or password.");
  }
}

let name = prompt("Enter your name");
let password = prompt("Enter your password");
signIn(name, password);
