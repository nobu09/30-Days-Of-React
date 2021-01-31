let age = prompt('Enter your age:')

switch (true) {
  case Number.isNaN(Number(age)):
    console.log('You input was not number.')
    break
  case age >= 18:
    console.log('You are old enough to drive.')
    break
  default:
    console.log(`You are left with ${18-age} years to drive.`)
}
