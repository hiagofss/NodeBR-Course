const ContextStrategy = require('./database/strategies/base/contextStrategy');
const MongoDB = require('./database/strategies/mongoDB');
const Postgres = require('./database/strategies/postgres');

const contextMongoDB = new ContextStrategy(new MongoDB());
contextMongoDB.create();

const constextPostgres = new ContextStrategy(new Postgres());
constextPostgres.create();
