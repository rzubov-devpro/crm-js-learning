//Task №5
function opposite(number) {//Function declaration, where (number) it's a parameter of function
    return -number;
}

console.log('opposite:', opposite(30));// Call function and send argument "34" to the function

//Task №2 Add alert or return
function multiply(a, b) {//Function declaration, where (a and b ) are  parameters of function
    return a * b;
}
console.log('multiple:', multiply(5,5));

multiply(5, 5);// Call function and send  two arguments ( 5 and 5)

//Task 4
function calculator(operation, number1, number2) {//Function declaration, where operation is string and number 1 and number 2 are numbers
    if (operation == '+') {
        return number1 + number2;
    } else if (operation == '-') {// else if  operator verifies  several conditions
        return number1 - number2 ;
    } else if (operation == '*') {
        return number1 * number2;
    } else if (operation == '/') {
        return number1 / number2;
    }
}
console.log('calculator', calculator("+",1,1));
console.log('calculator', calculator('-','1',1));
console.log('calculator', calculator('*',2,2));
console.log('calculator', calculator('/',4,2));


//task 3
function devisible2(n, x, y) {//Function declaration, where  n, x, y are parameters
    if (n % x == 0 && n % y == 0)//&& it's "and" operator
    {
        return 'true';
    } else {
        return 'false';
    }
}
console.log('devisible2',devisible2(1,1,1));
console.log('devisible',devisible2(1,100,250));

//task5
function calculsum(a, b, c, d) {

    let isIgnored = confirm('Ignore negatives?');
    if (isIgnored) {

        if (a < 0) {
            a = 0;
        }
        if (b < 0) {
            b = 0;
        }
        if (c < 0) {
            c = 0;
        }
        if (d < 0) {
            d = 0;
        }

    }
    return a + b + c + d;

}
console.log('calculsum',calculsum(-1,-1,-1,-1));

console.log('calculsum',calculsum(1,-4,7,12));







