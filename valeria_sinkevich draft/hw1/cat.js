let cat = {
    name: 'Max',
    age: 5,
    color: [
        'white', 'black', 'red'
    ],
    canMeow: true,
    canRun: true,
    meow() {
        console.log(`Meow, my name is ${this.name}`);
        console.log('1',this)
    },
    hands: {
        isClawsReleased: false,
        releasedClaws() {
            console.log('2',this)
          this.isClawsReleased=true;
        }

    },


};
const hands=cat.hands;


/* function meow() {
     console.log (`Meow, my name is ${cat.name}`)
 }
meow();*/
cat.meow();
cat.hands.releasedClaws();
console.log(cat.name);
cat.name='Jak';
console.log(cat);
hands.isClawsReleased=false;
console.log(cat);




