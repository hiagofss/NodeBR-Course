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
        }, 10);
    });
}

function getPhone(idUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phone: '123456789',
                ddd: '00',
            });
        }, 10);
    });
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            address: 'Washinton Borner',
            number: 100,
        });
    }, 10);
}

const userPromise = getUser();

userPromise
    .then((user) => {
        return getPhone(user.id).then((result) => {
            return {
                user: {
                    name: user.name,
                    id: user.id,
                },
                phone: result,
            };
        });
    })
    .then((data) => {
        const address = getAddressAsync(data.user.id);
        return address.then((result) => {
            return {
                user: data.user,
                phone: data.phone,
                address: result,
            };
        });
    })
    .then(function (result) {
        console.log(`
        Name: ${result.user.name}
        Address: ${result.address.address}, ${result.address.number}
        Phone: (${result.phone.ddd}) ${result.phone.phone}`);
    })
    .catch((err) => {
        console.error('There was error in the user' + err);
    });
