const array = [1, 2, 3, 4, 5];

// Calculate the sum of all elements using reduce()
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

// Calculate the average of all elements using reduce()
const average = sum / array.length;

// Display the sum and average
console.log('Sum:', sum);
console.log('Average:', average);
