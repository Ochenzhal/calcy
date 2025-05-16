let numLeft
let numRight
let operator

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate() {
  if(operator === '+') return add(numLeft, numRight);
  if(operator === '-') return subtract(numLeft, numRight);
  if(operator === '*') return multiply(numLeft, numRight);
  if(operator === '/') return divide(numLeft, numRight); 
}