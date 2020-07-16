class Animal {
  constructor(name) {
    this.name = name;
    this.isWalking = false;
    this.hangry = false;
  }

  getName() {
    return this.name;
  }

  walk() {
    this.isWalking = true;
    this.hangry = true;
  }

  stop() {
    this.isWalking = false;
  }

  eat() {
    this.hangry = false;
  }
}

const patrick = new Animal('Patrick');
const john = new Animal('John');
const sally = new Animal('Sally');
const nick = new Animal('Nick');

console.log(patrick);
console.log(john);
console.log(sally);
console.log(nick);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(patrick.getName());
console.log(john.getName());
console.log(sally.getName());
console.log(nick.getName());
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
patrick.walk();
console.log(patrick);
patrick.stop();
console.log(patrick);
patrick.eat();
console.log(patrick);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

class Cat extends Animal {
  constructor(name, color, age) {
    super(name);
    this.color = color;
    this.age = age;
  }

  meow(){
    console.log('');
  }
  
}

const barsik = new Cat('Barsik', 'ginger', 5);

