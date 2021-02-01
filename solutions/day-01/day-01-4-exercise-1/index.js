let age = prompt("Enter your age:");

switch (true) {
  case Number.isNaN(Number(age)):
    console.log("You input was not number.");
    break;
  case age >= 18:
    console.log("You are old enough to drive.");
    break;
  default:
    console.log(`You are left with ${18 - age} years to drive.`);
}

let yourAge = prompt("Enter your age:");

switch (true) {
  case Number.isNaN(Number(yourAge)):
    console.log("You input was not number.");
    break;
  case yourAge > 41:
    console.log(`You are ${yourAge - 41} years older than me.`);
    break;
  case yourAge == 41:
    console.log("You are same ages to me.");
    break;
  case yourAge < 41:
    console.log(`You are ${41 - yourAge} years younger than me.`);
    break;
}
