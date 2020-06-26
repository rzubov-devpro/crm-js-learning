const bar={
    sprite:10,
    cola:12,
    whickey:5,
    fanta:7,
    vodka:0,
    drink (drinkName){
        const drink=this[drinkName];

        if (!(drink&& drink>0)) {
            console.log(`sorry, no ${drinkName}!`);
            return; // stopping function

        }
        this[drinkName]--; //reduces number
    },
    getTables() {
        console.log((this.tables));

    },

    tables: [
        {
            id: 1,
            location: 2,
            reserved: false,
            reserve: reserved,
        },

        {
            id: 2,
            location: 3,
            reserved: false,
            reserve: reserve,
        },

        {
            id: 3,
            location: 4,
            reserved: false,
            reserve: reserve,
        }

    ],
    reserveTable(index){
        this.tables[index].reserve();
    }


};

function reserve() {
    this.reserved = true;
}



