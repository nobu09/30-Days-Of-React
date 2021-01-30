const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort();
console.log(sortedAges);

console.log(`minimum of ages: ${Math.min(...ages)}`)
console.log(`maximum of ages: ${Math.max(...ages)}`)

const length = sortedAges.length;
let median = 0;
if (length % 2 === 0) {
  median = (sortedAges[length / 2 - 1] + sortedAges[length / 2]) / 2;
} else {
  median = sortedAges[length / 2];
}

console.log(`median of ages: ${median}`);

const sum = ages.reduce((sum, val) => sum += val, 0);
console.log(`average of ages: ${sum / length}`);

const range = Math.max(...ages) - Math.min(...ages);
console.log(`(max - min) of ages: ${range}`)

const minAvg = Math.abs(Math.min(...ages) - sum / length);
const maxAvg = Math.abs(Math.max(...ages) - sum / length);
console.log(`minAvg of ages: ${minAvg}`);
console.log(`maxAvg of ages: ${maxAvg}`);

console.log(countries.slice(0, 10));
const middlePosition = countries.length % 2 === 0 ? countries.length / 2 : (countries.length + 1) / 2 
console.log(countries[middlePosition]);

console.log(`first array: ${countries.slice(0, middlePosition)}`);
console.log(`second array: ${countries.slice(middlePosition, countries.length)}`);
