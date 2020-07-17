function getShip(name) {
    const object = {
        name: name || 'unnamed',
        speed: 10,
        fuel: 700,
        engines: [{
            type: 'master',
            isEngaged: false,
            capacity: 1200,
            engage: engage,
            stop: stop,
        },
            {
                type: 'slave',
                isEngaged: false,
                capacity: 500,
                engage: engage,
                stop: stop,
            }
        ],

        getEngines: getEngines,
        start() {
            for (let i = 0; i < this.engines.length; i++) {
                console.log(this.engines[i]);
            }

        },

        accelerate(speed) {
        },

        stop(index) {
            this.engines[index].stop()

        },
        fillUp(amount) {
        },

        toggleEngine(index) {
            this.engines[index].engage();
        },


    };

    function start() {
    }

    function stop() {
        this.isEngaged = false;
    }

    function engage() {

        this.isEngaged = true;

        console.log(this.type + ' engage successfully started');
        //console.log("---------------", this);
        this.capacity = this.capacity - 100;//?100 for master and 50 for slave?

    }

    object.name = name ? name : "unnamed";
    return object
}

function getEngines() {
    console.table(this.engines);
}


let serenity = getShip('test');
serenity.toggleEngine(0);
serenity.getEngines();
serenity.start();
serenity.stop(0);
serenity.getEngines();