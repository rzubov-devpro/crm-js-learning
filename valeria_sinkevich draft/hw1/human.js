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
            getFingersCount(){
                return this.fingers.length

            }

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
    getNoseType() {
        return this.head.nose.type
    },
    head: {
        getNoseType(){
          console.log(this)
          return this.nose.type
        },
        nose: {
            type: 'potato',
            getType(){
                console.log('this1',this)
                return this.type

            }
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


console.log("fingerscounts:", human.hands[0].getFingersCount());
console.log('nousetype:', human.head.nose.getType());
console.log('nosetype2:',human.head.getNoseType() );
console.log('typeofnose3:',human.getNoseType())