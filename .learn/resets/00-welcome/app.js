// This is my function that sums two numbers
const sum = (a,b) => {
  return a + b;
}

// Just a console log for ourselves
console.log(sum(7,3));

// Function to convert Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
  let valueInDollar = valueInEuro * 1.07;
  return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
  const euro = valueInDollar / 1.07;
  const yen = euro * 156.5;
  return yen;
}

const fromYenToPound = function(valueInYen) {
  const euro = valueInYen / 156.5;
  const pound = euro * 0.87;
  return pound;
}

// Export functions
module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound
};