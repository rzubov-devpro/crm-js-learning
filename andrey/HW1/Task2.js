function calculator(mathOp, a, b) {
   if (mathOp === '+') {
       return a + b;
    }
    if (mathOp === '-') {
        return a - b;
    }
    if (mathOp === '/') {
        return a / b;
    }
    if (mathOp === '*') {
        return a * b;
    }
}

console.log(calculator('+',3, 7));
