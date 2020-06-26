const object = {
    name: "",
    speed: 0,
    fuel: 700,
    engines: [
        {
            type: "master",
            isEngaged: false,
            capacity: 1200,
            engage: engage,
            stop: stop,

        },

        {
            type: "slave",
            isEngaged: false,
            capacity: 500,
            engage: engage,
            stop: stop,

        },

    ],

    toggleEngine(index) {
        this.engines[index].engage();

        this.engines[0].capacity= this.engines[0].capacity - 100;
        this.engines[1].capacity= this.engines[1].capacity - 50;
    },
    stopEngage(index){
        this.engines[index].stop();
        this.engines[0].capacity= this.engines[0].capacity+100 ;
        this.engines[1].capacity= this.engines[1].capacity+50;
    },
    getEngines() {
        console.table(this.engines);
    }
};


function getShip(name) {
    object.name = name ? name : "unnamed";
    return object;
}

function engage() {

    this.isEngaged = true;
    console.log(this.type + '  engage successfully started');

}

function stop(){
    this.isEngaged=false;
    console.log(this.type+' engine successfully stopped')
}

function fullUp (amount) {
    console.log(object.fuel+amount)
}


getShip('test');
console.log(object);
getShip('');
console.log(object);
getShip('user').toggleEngine(0);
getShip().getEngines();
getShip('user').stopEngage(0);
getShip().getEngines();
fullUp(100);
