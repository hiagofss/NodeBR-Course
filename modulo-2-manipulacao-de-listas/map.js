const service = require('./service');

Array.prototype.myMap = function (callback) {
    const newArrayMap = [];
    for (let i = 0; i <= this.length - 1; i++) {
        const result = callback(this[i], i);
        newArrayMap.push(result);
    }
    return newArrayMap;
};

main();
async function main() {
    try {
        const { results } = await service.getPeoples('a');

        let names = [];
        let names2 = [];

        results.myMap((people) => {
            names2.push(people.name);
        });

        console.time('foreach');
        results.forEach((people, i) => {
            return `[${i}]${people.name}`;
        });
        console.timeEnd('foreach');

        console.time('map');
        const namesMap = results.map((people) => people.name);
        console.timeEnd('map');
        console.log('Names>>> ' + names);
        console.log('Names2>>> ' + names2);
        console.log('Names Map>>> ' + namesMap);
    } catch (error) {
        console.error('There was error: ' + error);
    }
}
