const util = require('util');
const getAddressAsync = util.promisify(getAddress);

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: 'Aladin',
                bornDate: new Date(),
            });
        }, 1000);
    });
}

function getPhone(idUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phone: '123456789',
                ddd: '00',
            });
        }, 1000);
    });
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            address: 'Washinton Borner',
            number: 10000,
        });
    }, 1000);
}

main();

async function main() {
    try {
        console.time('time-promise');
        const user = await getUser();
        // const phone = await getPhone(user.id);
        // const address = await getAddressAsync(user.id);

        const result = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id),
        ]);

        const phone = result[0];
        const address = result[1];

        console.log(`
        Name: ${user.name}
        Phone: (${phone.ddd}) ${phone.phone}
        Adress: ${address.address}
        `);
        console.timeEnd('time-promise');
    } catch (err) {
        console.error('Error>>> ' + err);
    }
}
