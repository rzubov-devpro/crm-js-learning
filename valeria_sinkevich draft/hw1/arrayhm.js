const office = {
    floor: 1,
    address: "13th Street47",
    worksAmount: 400,
    maxWorkerAmount: 404,

    openDoor: false,
    employees: [],
    addEmployee(emploee) {
        console.log("add employee");
        this.employees.push(emploee);


        console.log(this.employees.length);

    },

    toggleDoor() {
        this.openDoor = !this.openDoor;

    },
    checkLimit() {
        if (this.worksAmount > this.maxWorkerAmount) {
            console.log("more than limit");
        } else {
            console.log("OK");
        }
        debugger;

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

let employeeToAdd = 5;
console.log(employeeToAdd);

for(let i=0;i<employeeToAdd;i++) {
    let emploee = {
        id: 1+i,
        name: `Employee ${i + 4}`,
        capacity: 100 / i
    };
    office.addEmployee(emploee);

}



for (let i = 0; i < office.employees.length; i++) {
    console.log(office.employees[i]);
}

for (let i = 0; i < office.rooms.length; i++) {
    console.log(office.rooms[i].maxAmount--);
}


office.rooms.forEach(function (room, index) {

    room.turnOn();

});
office.rooms.forEach(room => console.log('look at ', room));


console.log(office.rooms);

for(let i=0;i<office.employees.length;i++){
  office.employees[i].id++
}
console.log(office.employees);