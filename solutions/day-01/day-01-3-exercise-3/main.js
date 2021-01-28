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
