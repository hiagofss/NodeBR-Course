const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
    constructor() {
        this.FILE_NAME = 'heroes.json';
    }

    async getDataFile() {
        const file = await readFileAsync(this.FILE_NAME, 'utf8');

        return JSON.parse(file.toString());
    }

    async writeFile(data) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data));

        return true;
    }

    async list(id) {
        const data = await this.getDataFile();

        const filterData = data.filter((item) => (id ? item.id === id : true));

        return filterData;
    }

    async create(hero) {
        const data = await this.getDataFile();

        const id = hero.id <= 2 ? hero.id : Date.now();

        const heroWithId = { id, ...hero };
        console.log(data);

        const finalData = [...data, heroWithId];

        const result = await this.writeFile(finalData);

        return result;
    }

    async delete(idHero) {
        if (!idHero) {
            return await this.writeFile([]);
        }

        const data = await this.getDataFile();

        const index = data.findIndex((item) => item.id === parseInt(idHero));

        if (index === -1) {
            throw Error('This user not found');
        }

        data.splice(index, 1);

        return await this.writeFile(data);
    }

    async update(idHero, newData) {
        const data = await this.getDataFile();

        const index = data.findIndex((item) => item.id === parseInt(idHero));

        if (index === -1) {
            throw Error('This user not found');
        }

        const hero = data[index];

        const heroToUpdate = { ...hero, ...newData };

        data.splice(index, 1);

        return await this.writeFile([...data, heroToUpdate]);
    }
}

module.exports = new Database();
