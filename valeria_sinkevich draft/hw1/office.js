const office = {
    floor: 1,
    address: "13th Street47",
    worksAmount: 400,
    maxWorkerAmount: 404,
    openDoor: false,
    toggleDoor() {
        this.openDoor = !this.openDoor;

    },
    checkLimit() {
        if (this.worksAmount > this.maxWorkerAmount) {
            console.log("more than limit");
        }
        else {
            console.log("OK");
        }


    },
    addNewWorker() {
        this.worksAmount++;
    },

    removeWorkers() {
        this.worksAmount--;
    },

    rooms: [


        {
            number: 1,
            maxAmount: 10,
            conditioner: false,
            turnOn: turnOn,


        },

        {
            number: 2,
            maxAmount: 15,
            conditioner: false,
            turnOn: turnOn

        },
        {
            number: 3,
            maxAmount: 20,
            conditioner: false,
            turnOn: turnOn
        }
    ],

    toggleConditioner(index) {
        this.rooms[index].turnOn();
    }
    ,

};

function turnOn() {
    this.conditioner = true;


}


console.log("show floor", office.floor);
console.log("show address", office.address);

office.addNewWorker();
office.addNewWorker();
office.addNewWorker();
office.addNewWorker();
office.addNewWorker();
office.removeWorkers();

console.log('show  amount of workers ', office.worksAmount);
console.log('show  max amount of workers ', office.maxWorkerAmount);


office.toggleConditioner(0);
console.log("show rooms", office.rooms[0]);


console.log("show door", office.openDoor);

office.toggleDoor();

console.log("show door", office.openDoor);
console.log('show room3', office.rooms[2]);
office.checkLimit();