// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.

// Create a set object
const set = new Set();

// Add four random numbers from 0 to 10 to the set
for (let i = 0; i < 4; i++) {
  set.add(Math.floor(Math.random() * 10));
  
}console.log(set)

// Check if the set has 8 in it
if (set.has(8)) {
  console.log("The set has 8 in it.");
} else {
  console.log("The set does not have 8 in it.");
}
