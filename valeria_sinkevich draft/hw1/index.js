/*
 let x1=1;
x1=-x1;
alert(x1); //umarnuy -

let x= 1, y=3;
alert (y-x);//binarnuy -
 let b= 'my ' +'hw is ';//'+'
 alert(b);
 let apple="3";
 let orange="3";
 alert(+apple+ +orange);//unarnuy + +apple= number
  alert(5%2);*/
/*
alert(10%101==0);
alert(2*2*2);
 let counter= 2;
 counter++;
 alert (counter);*/

/*let resut=5>4;
alert(resut);

let age=prompt('how old are u?',100);
alert (`U are  ${age} year old `);*/

/*
let athome=confirm('Are u work WH?');
alert(athome);//true if press OK
*/

/*let month =prompt('How many months are u working from home ', 'tap number');
if (month==3) {
    alert('U are right!');
} else {
    alert("U are wrong");
}*/


/*
let month= prompt('how long months are u at home ','enter a number of months');
if (month>3 || month==4){
    alert ('No, u are wrong , we are at home less than u think');
}
else if (month<3){
    alert('No,u are wrong, we are at home more than u think ');
} else {
    alert ('U are absolutely correct!');
}
*/


/*let officeWork= prompt('How long do the office usually work ?','');
if (officeWork> 18 $$ officeWork==18 ) {
    alert( 'Office close');
} else if (officeWork<18 || officeWork>10) {
    alert('Office open');
}*/
/*let i=0;
while (i<3){
    alert(i);
    i++;
}*/

/*
for (let i=0; i<5; i++)
    alert(i);
*/
/*
let user={
    name: "Jack",
    age: 25,
    weight: 80,
    height:186,
    isAdmin:true,
    "like beer":true,

};

user["like js"]=true;
alert(user["like js"]);
delete user["like js"];


alert(user.name);
alert(user.weight);
alert(user.isAdmin);

user.workWfh=true;

alert(user.workWfh);

 delete user.age;
 alert (user.age);*/

/*let user={
    name:"Bred",
    age:25,
};
let key=prompt('what do want to know about user?');
alert(user[key]);*/

let fruits={
    apple:5,
    banana:10,
};

let  fruit =prompt(" what kind of fruits are u going to buy?");
let bag={
    [fruit]:5,
};
console.log ('show:', bag);
/*

function showMessage(name) {
    let enteredNme= prompt('what is your name?', 'enter something');
    return enteredNme +name;

}
console.log('show message',showMessage(' , have a good day' ));

function typeoffriut() {
    let enteredNme= prompt('what kind of fruit will u buy?', 'enter something');
    return fruits[enteredNme]

}
console.log('show quantity of apple', typeoffriut('apple'));






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
};

console.log(human.head.nose.type);
console.log(human.hands[0].type);
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
console.log('name:',getHumanParam('name'));
console.log('height:',getHumanParam('height'));
console.log('name:', getHumanParam('name'));
console.log('surename', getHumanParam('surename'));





*/







