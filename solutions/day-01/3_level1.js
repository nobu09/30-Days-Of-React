const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

const arr_empty = []

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.length)

console.log(numbers[0], numbers[2], numbers[4])

const mixedDataTypes = [
  1,
  'string',
  true,
  false,
  { key: 'object' },
]

console.log(mixedDataTypes)

const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
]

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[3], itCompanies[6])
for (const company of itCompanies) {
  console.log(company);
}
for (const company of itCompanies) {
  console.log(company.toUpperCase());
}

const sentence = itCompanies.reduce((result, company, index) => {
  if (itCompanies.length - 1=== index) {
    result += ` and ${company} are big IT companies.`;
  } else if (index === 0) {
    result += `${company}`;
  } else {
    result += `, ${company}`;
  }

  return result;
}, '');

console.log(sentence);

index = itCompanies.indexOf("Unisys") 
if (index === -1) {
  console.log('not found');
} else {
  console.log(itCompanies[index]);
}

for (const company of itCompanies) {
  if (company.indexOf('o') !== -1) {
    console.log(company);
  }
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(2, 5));

itCompanies.shift();
console.log("shift");
console.log(itCompanies);

itCompanies.splice(3, 1);
console.log("途中を削除");
console.log(itCompanies);

itCompanies.pop();
console.log("pop");
console.log(itCompanies);

itCompanies.splice(0);
console.log("全削除");
console.log(itCompanies);
