
function getShip(name) {
    return {
        name: name ? name: 'unanamed',
        speed: 0,
        fuel: 700,
        engines: [
            {
                type: 'master',
                isEngaged: false,
                capacity: 1200,
                engage:  engage,
                stop: 'stop',

            },
            {
                type:'slave',
                isEngaged: false,
                engage: engage,
                stop:'stop',
            },

        ],
        toggleEngine(index) {

           getShip().engines[index].engage();

        }

    }

}

function engage() {

    this.isEngaged = true;
}


/*getShip('test_name').toggleEngine(0);

const result_object = getShip();

console.log(result_object);

console.log(result_object.speed);*/


console.log(getShip(''));



