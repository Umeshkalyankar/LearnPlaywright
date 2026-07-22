class Car {

    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.engineName = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

const tesla = new Car()
tesla.getEngine();

tesla.setEngine("V8");
console.log(tesla.getEngine);