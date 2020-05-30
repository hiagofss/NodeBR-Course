const InterfaceHeroes = require('./interfaces/interfaceHeroes');

class Postgres extends InterfaceHeroes {
    constructor() {
        super();
    }

    create(item) {
        console.log('Item add to Postgres');
    }
}
module.exports = Postgres;
