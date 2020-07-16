const name = 'nalivaika';

function reserve() {
    debugger;
    this.reserved = true;
    debugger;
}

let id = 0;

function newId() {
    id++;
    return id;
}

class Table {
    constructor(props) {
        this.id = newId();
        this.location = props.location
        this.reserved = props.reserved || false;
    }

    reserve() {
        debugger;
        this.reserved = true;
        debugger;
    }
}


const bar = {
    name,
    sprite: 10,
    cola: 12,
    whiskey: 5,
    fanta: 7,
    vodka: -100,
    drink(drinkName) {
        const drink = this[drinkName];
        console.log(Boolean(drink), drink)
        if (!(drink && drink > 0)) {
            console.log(`Sorry buddy, no ${drinkName}!`);
            return;
        }
        this[drinkName]--;
    },
    getTables() {
        console.log(this.tables);
    },
    tables: [],
    reserveTable(index) {
        this.tables[index].reserve();
    },
    addTable(props) {
        this.tables.push(new Table(props))
    }
};


bar.drink('vodka');
console.log('spite count:', bar.vodka);

/*
bar.drink('sprite');
bar.drink('sprite');
console.log('spite count:', bar.sprite);
*/


bar.getTables();


bar.addTable({
    location: '4',
});

bar.addTable({
    location: '3',
});

bar.addTable({
    location: '2',
});

/*bar.tables[0].reserve();
bar.tables[1].reserve();
bar.tables[2].reserve();*/



bar.reserveTable(0);
bar.reserveTable(1);
bar.reserveTable(2);


let arr = [{
    type: 'master',
    isEngaged:false,
    capacity: 1200,
},
    {
        type: 'slave',
        isEngaged:false,
        capacity: 300,
    }]
console.table(arr);
