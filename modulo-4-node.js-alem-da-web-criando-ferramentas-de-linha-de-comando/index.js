const Commander = require('commander');
const Database = require('./Database');
const Hero = require('./Hero');

async function main() {
    Commander.version('v1')
        .option('-n, --name [value]', 'Name of hero: ')
        .option('-p, --power [value]', 'Power of hero: ')
        .option('-i, --id [value]', 'ID of hero: ')

        .option('-c, --register', 'Register new hero: ')
        .option('-l, --list', 'List heroes: ')
        .option('-r, --remove', 'Remove hero: ')
        .option('-u, --update [value]', 'Update hero: ')

        .parse(process.argv);

    const hero = new Hero(Commander);

    try {
        if (Commander.register) {
            delete hero.id;

            const result = await Database.create(hero);

            if (!result) {
                console.error('This hero not register.');
                return;
            }

            console.log('Hero successfully registered.');
        }

        if (Commander.list) {
            const result = await Database.list();

            console.log(result);

            return;
        }

        if (Commander.remove) {
            const result = await Database.delete(hero.id);

            if (!result) {
                console.error('This hero not deleted.');
                return;
            }

            console.log('Hero successfully deleted.');
        }

        if (Commander.update) {
            const idUpdate = parseInt(Commander.update);

            delete hero.id;

            const data = JSON.parse(JSON.stringify(hero));

            const result = await Database.update(idUpdate, data);

            if (!result) {
                console.error('This hero not updated.');
                return;
            }

            console.log('Hero updated successfully.');
        }
    } catch (error) {
        console.log(error);
    }
}

main();
