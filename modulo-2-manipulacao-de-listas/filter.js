const { getPeoples } = require('./service');

Array.prototype.myFilter = function (callback) {
    const list = [];
    for (index in this) {
        const item = this[index];
        const result = callback(item, index, this);
        if (!result) continue;
        list.push(item);
    }
    return list;
};

main();
async function main() {
    try {
        const { results } = await getPeoples('a');

        // const familyLars = results.filter((people) => {
        //     const result = people.name.toLowerCase().indexOf('lars') !== -1;

        //     return result;
        // });
        // const names = familyLars.map((people) => people.name);

        const familyLars2 = results.myFilter((item, index, list) => {
            return item.name.toLowerCase().indexOf('lars') !== -1;
        });
        console.log(familyLars2);
    } catch (error) {
        console.error('There was error: ' + error);
    }
}
