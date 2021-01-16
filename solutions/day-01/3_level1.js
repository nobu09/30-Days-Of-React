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



