//Task №5
function opposite(number) {//Function declaration, where (number) it's a parameter of function
    return -number;
}

console.log('opposite:', opposite(30));// Call function and send argument "34" to the function

//Task №2 Add alert or return
function multiply(a, b) {//Function declaration, where (a and b ) are  parameters of function
    return a * b;
}

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

//task 3
function devisible2(n, x, y) {//Function declaration, where  n, x, y are parameters
    if (n % x == 0 && n % y == 0)//&& it's "and" operator
    {
        return 'true';
    } else {
        return 'false';
    }
}




let human = {
    isAlive: true,
    name: 'Maksimka',
    surename: 'Petrov',
    age: 40,
    hairColor: 'white',
    height: 180,

    hands: [
        {
            type: 'left',
            fingers: [1, 2, 3, 4, 5],
        },
        {
            type: 'right',
            fingers: [1, 2, 3, 4, 5]
        }
    ],
    legs: [
        {
            type: 'left',
            toes: [1, 2, 3, 4, 5]
        },
        {
            type: 'right',
            toes: [1, 2, 3, 4, 5]
        }
    ],
    head: {
        nose: {
            type: 'potato',
        },
    },
}

console.log(human.head.nose.type);
console.log(human.hands[0].type)
console.log(human.legs.length)
console.log('toes:',human.legs[1].toes.length)
console.log('age:', human['age'])
console.log('age2:', human.age)
console.log('typeofnose', human['head']['nose']['type']);
console.log('typeoftoes', human['legs'][1]['toes'].length);

function getHuman() {
    return human

}
console.log('human:',getHuman());

function getHumanAge() {
    return  human['age']

}
console.log('humanage:',getHumanAge());


function getHumanHeight() {
    return  human['height']

}
console.log('humanheight:',getHumanHeight());

function getHumanParam(paramName) {
  //return human['height']
    return human[paramName]

}
console.log('name:',getHumanParam('name'))
console.log('height:',getHumanParam('height'))











