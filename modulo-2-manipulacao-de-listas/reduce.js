const { getPeoples } = require('./service');

Array.prototype.myReduce = function (callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

    for (let index = 0; index < this.length; index++) {
        finalValue = callback(finalValue, this[index], this);
    }

    return finalValue;
};

main();
async function main() {
    try {
        const { results } = await getPeoples('a');

        const height = results.map((people) => parseInt(people.height));
        // const totalHeight = height.reduce((previous, next) => {
        //     return previous + next;
        // }, 0);

        const myList = [
            ['Hiago', 'Souza'],
            ['NodeBR', 'SouDev'],
        ];

        const total = myList
            .myReduce((previous, next) => {
                return previous.concat(next);
            }, [])
            .join(', ');

        console.log(total);
    } catch (error) {
        console.error('There was error: ' + error);
    }
}
