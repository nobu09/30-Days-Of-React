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

// let number = prompt("Enter a number:");

// Number.isNaN(Number(number))
//   ? console.log("You input was not number.")
//   : number % 2 === 0
//   ? console.log(`${number} is an even number`)
//   : console.log(`${number} is an odd number`);

// let score = prompt("Enter your score:");

// switch (true) {
//   case Number.isNaN(Number(score)):
//     console.log("You input was not number.");
//     break;
//   case score >= 90 && score <= 100:
//     console.log("Your grade is A");
//     break;
//   case score >= 70 && score < 90:
//     console.log("Your grade is B");
//     break;
//   case score >= 60 && score < 70:
//     console.log("Your grade is C");
//     break;
//   case score >= 50 && score < 60:
//     console.log("Your grade is D");
//     break;
//   case score >= 0 && score < 50:
//     console.log("Your grade is F");
//     break;
//   default:
//     console.log("Your score is out of range");
// }

// let month = prompt("Enter your month:");

// switch (month) {
//   case "September":
//   case "October":
//   case "November":
//     console.log("the season is Autumn");
//     break;
//   case "December":
//   case "January":
//   case "February":
//     console.log("the season is Winter");
//     break;
//   case "March":
//   case "April":
//   case "May":
//     console.log("the season is Spring");
//     break;
//   case "June":
//   case "July":
//   case "August":
//     console.log("the season is Summer");
//     break;
//   default:
//     console.log("Your input is not month");
// }

function capitalize(s) {
  return s && s[0].toUpperCase() + s.toLowerCase().slice(1);
}

// let day = prompt(" What is the day today?:");
// let displayDay = capitalize(day);

// switch (displayDay) {
//   case "Saturday":
//   case "Sunday":
//     console.log(`${displayDay} is a weekend.`);
//     break;
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log(`${displayDay} a working day.`);
//     break;
//   default:
//     console.log("Your input is not day");
// }

// let month = prompt("Enter a month:");
// let displayMonth = capitalize(month);

// switch (displayMonth) {
//   case "February":
//     console.log(`${displayMonth} has 28 days.`);
//     break;
//   case "April":
//   case "June":
//   case "September":
//   case "November":
//     console.log(`${displayMonth} has 30 days.`);
//     break;
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     console.log(`${displayMonth} has 31 days.`);
//     break;
//   default:
//     console.log("Your input is not month");
// }

let year = prompt("Enter the year:");
let leapYear = false;

switch (true) {
  case Number.isNaN(Number(year)):
    console.log("You input was not year.");
    break;
  case year < 0:
    console.log("You input was not positive number year.");
    break;
  case year % 4 != 0:
    break;
  case year % 100 != 0:
    leapYear = true;
    break;
  case year % 400 != 0:
    break;
  default:
    learYear = true;
}

console.log(leapYear);

let month = prompt("Enter a month:");
let displayMonth = capitalize(month);

switch (true) {
  case leapYear && displayMonth == "February":
    console.log(`${displayMonth} has 29 days.`);
    break;
  case !leapYear && displayMonth == "February":
    console.log(`${displayMonth} has 28 days.`);
    break;
  case ["April", "June", "September", "November"].includes(displayMonth):
    console.log(`${displayMonth} has 30 days.`);
    break;
  case [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
  ].includes(displayMonth):
    console.log(`${displayMonth} has 31 days.`);
    break;
  default:
    console.log("Your input is not month");
}
