// let age = prompt("Enter your age:");

// switch (true) {
//   case Number.isNaN(Number(age)):
//     console.log("You input was not number.");
//     break;
//   case age >= 18:
//     console.log("You are old enough to drive.");
//     break;
//   default:
//     console.log(`You are left with ${18 - age} years to drive.`);
// }

// let yourAge = prompt("Enter your age:");

// switch (true) {
//   case Number.isNaN(Number(yourAge)):
//     console.log("You input was not number.");
//     break;
//   case yourAge > 41:
//     console.log(`You are ${yourAge - 41} years older than me.`);
//     break;
//   case yourAge == 41:
//     console.log("You are same ages to me.");
//     break;
//   case yourAge < 41:
//     console.log(`You are ${41 - yourAge} years younger than me.`);
//     break;
// }

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

let number = prompt("Enter a number:");

Number.isNaN(Number(number))
  ? console.log("You input was not number.")
  : number % 2 === 0
  ? console.log(`${number} is an even number`)
  : console.log(`${number} is an odd number`);
