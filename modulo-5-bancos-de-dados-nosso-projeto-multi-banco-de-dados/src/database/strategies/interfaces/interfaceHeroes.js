class NotImplementedException extends Error {
    constructor() {
        super('Not implemented Exception');
    }
}

class InterfaceHeroes {
    create(item) {
        throw new NotImplementedException();
    }
    read(item) {
        throw new NotImplementedException();
    }
    update(id, item) {
        throw new NotImplementedException();
    }
    delete(id) {
        throw new NotImplementedException();
    }
}

module.exports = InterfaceHeroes;
