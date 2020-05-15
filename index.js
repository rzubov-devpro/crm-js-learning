//Task №5
function opposite(number) {//Function declaration, where (number) it's a parameter of function
    alert(-number);
}
opposite(-34);// Call function and send argument "34" to the function

//Task №2 Add alert or return
function multiply(a, b){//Function declaration, where (a and b ) are  parameters of function
    alert (a * b);
}
multiply(5,  5);// Call function and send  two arguments ( 5 and 5)
//Task 4
function calculator(operation, number1, number2) {//Function declaration, where operation is string and number 1 and number 2 are numbers
    if (operation == '+') {
        alert (number1 + number2);
    }
    else if (operation == '-') {// else if  operator verifies  several conditions
        alert (number1 - number2);
    }
    else if (operation == '*') {
        alert (number1 * number2);
    }
    else if (operation == '/') {
        alert (number1 / number2);
    }
}
//task 3
function devisible2(n, x, y) {//Function declaration, where  n, x, y are parameters
    if (n%x == 0 && n % y == 0)//&& it's "and" operator
    {
        alert('true');
    }    else {
        alert('false');
    }
}




















