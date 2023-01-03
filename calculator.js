function add(a, b) {
  console.log(a + b);
  return a + b;
}

function subtract(a, b) {
  console.log(a - b);
  return a - b;
}

function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

function divide(a, b) {
  console.log(a / b);
  return a / b;
}

function operate(a, op, b) {
  if (op == add) {
    add(a, b);
  }
  else if (op == subtract) {
    subtract(a, b);
  }
  else if (op == multiply) {
    multiply(a, b);
  }
  else if (op == divide) {
    divide(a, b);
  }
}
