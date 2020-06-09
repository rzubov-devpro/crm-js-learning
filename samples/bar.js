const bar = {
    sprite: 10,
    cola: 12,
    whiskey: 5,
    fanta: 7,
    vodka: 2,
    drink(drinkName) {
        const drink = this[drinkName];
        if (!(drink && drink > 0)) {
            console.log(`Sorry buddy, no ${drinkName}!`);
        }
        this[drinkName]--;
    },
    getTables() {
        console.log(this.tables);
    },
    tables: [
        {
            id: 1,
            location: 2,
            reserved: false,
            reserve: reserve
        },
        {
            id: 2,
            location: 3,
            reserved: false,
            reserve: reserve
        },
        {
            id: 3,
            location: 4,
            reserved: false,
            reserve: reserve
        }
    ],
    reserveTable(index) {
        this.tables[index].reserve();
    }
};

function reserve() {
    this.reserved = true;
}

bar.drink('sprite');
bar.drink('sprite');
bar.drink('sprite');
console.log('spite count:', bar.sprite);


//bar.tables[0].reserve();
/*bar.tables[1].reserve();*/
//bar.tables[2].reserve();

bar.reserveTable(0);
bar.reserveTable(1);
bar.reserveTable(2);

bar.getTables();
