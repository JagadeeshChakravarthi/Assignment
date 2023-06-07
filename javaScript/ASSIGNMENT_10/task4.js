// Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?
const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

// output:

// Hello John
// Hello Tina
// Hello Kale
// // Hello Max

// b)
//  The higher order function in the program is useFunction().
//  This function takes an array and a function as arguments. 
//  The function passed to useFunction() is called for each element in the array.
