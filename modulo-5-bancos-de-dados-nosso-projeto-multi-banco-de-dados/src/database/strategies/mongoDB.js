const InterfaceHeroes = require('./interfaces/interfaceHeroes');

class MongoDB extends InterfaceHeroes {
    constructor() {
        super();
    }

    create(item) {
        console.log('Item add to MongoDB');
    }
}

module.exports = MongoDB;
