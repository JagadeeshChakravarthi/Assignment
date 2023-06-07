// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

function printNumbers(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function printEvenNumbers(arr) {
  printNumbers(arr, function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
}

const numbers = [1, 2, 3, 4, 5];
printEvenNumbers(numbers);
