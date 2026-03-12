
// This is my function that sums two numbers
const sum = (a,b) => {
  return a + b;
}

// Just a console log for ourselves
console.log(sum(7,3));

// Export the function to be used on other files
module.exports = { sum };