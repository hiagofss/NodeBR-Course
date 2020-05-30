class NotImplementedException extends Error {
    constructor() {
        super('Not implemented Exception');
    }
}

class Interface {
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

class MongoDB extends Interface {
    constructor() {
        super();
    }

    create(item) {
        console.log('Item add to MongoDB');
    }
}

class Postgres extends Interface {
    constructor() {
        super();
    }

    create(item) {
        console.log('Item add to Postgres');
    }
}

class ContextStrategy extends Interface {
    constructor(strategy) {
        super();

        this._database = strategy;
    }

    create(item) {
        return this._database.create(item);
    }
    read(item) {
        return this._database.read(item);
    }
    update(id, item) {
        return this._database.update(id, item);
    }
    delete(id) {
        return this._database.delete(id);
    }
}

const contextMongoDB = new ContextStrategy(new MongoDB());
contextMongoDB.create();

const constextPostgres = new ContextStrategy(new Postgres());
constextPostgres.create();
