const service = require('./service');

async function main() {
    try {
        const { results } = await service.getPeoples('a');

        const names = [];
        console.time('start-time');
        for (let i = 0; i <= results.length - 1; i++) {
            const people = results[i];
            names.push(people.name);
        }
        console.timeEnd('start-time');

        console.time('forin');
        for (const key in results) {
            const people = results[key];
            names.push(people.name);
        }
        console.timeEnd('forin');

        console.time('forof');
        for (people of results) {
            names.push(people.name);
        }
        console.timeEnd('forof');
    } catch (error) {
        console.error('There was error: ' + error);
    }
}

main();
