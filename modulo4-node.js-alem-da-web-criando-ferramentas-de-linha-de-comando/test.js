const { deepEqual, ok } = require('assert');
const Database = require('./Database');

const DEFAULT_HERO = { id: 1, name: 'Flash', power: 'Speed' };
const DEFAULT_HERO_UPDATE = { id: 2, name: 'Captain American', power: 'Force' };

describe('Manipulation Heroes', () => {
    before(async () => {
        await Database.create(DEFAULT_HERO);
        await Database.create(DEFAULT_HERO_UPDATE);
    });

    it('Find hero, using file', async () => {
        const expected = DEFAULT_HERO;
        const [result] = await Database.list(expected.id);

        deepEqual(result, expected);
    });

    it('Create hero, use files', async () => {
        const expected = DEFAULT_HERO;

        const result = await Database.create(DEFAULT_HERO);

        const [actual] = await Database.list(DEFAULT_HERO.id);

        deepEqual(actual, expected);
    });

    it('Remove hero where ID, use files', async () => {
        const expected = true;

        const result = await Database.delete(DEFAULT_HERO.id);

        deepEqual(result, expected);
    });

    it('Update hero where ID, use files', async () => {
        const expected = {
            ...DEFAULT_HERO_UPDATE,
        };

        const newData = {
            name: 'Batman',
            power: 'Money',
        };

        await Database.update(DEFAULT_HERO_UPDATE.id, newData);

        const [result] = await Database.list(DEFAULT_HERO_UPDATE.id);
        deepEqual(result, expected);
    });
});
