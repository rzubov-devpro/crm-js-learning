const bar = {
    sprite: 10,
    cola: 12,
    whiskey: 5,
    fanta: 1,
    vodka: 2,
    drink(drinkName) {
        const drink = this[drinkName];
        if (!(drink && drink > 0)) {
            console.log(`Sorry buddy, no ${drinkName}!`);

        }
        this[drinkName]--;
    },

};



bar.drink('fanta');
bar.drink('fanta');
console.log("showfanta", bar.fanta);

/*bar.drink('sprite');

bar.drink('sprite');
console.log('cola count:', bar.cola);*/

/*

bar.tables[0].reserve();
bar.tables[1].reserve();
bar.tables[2].reserve();

bar.reserveTable(0);
bar.reserveTable(1);
bar.reserveTable(2);

bar.getTables();*!/
*/
