function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: 'Aladin',
            bornDate: new Date(),
        });
    }, 1000);
}

function getPhone(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            phone: '123456789',
            ddd: '00',
        });
    }, 2000);
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            address: 'Washinton Borner',
            number: 100,
        });
    }, 1000);
}

getUser(function resolveUser(error, user) {
    if (error) {
        console.error('There was an error in the user>>> ' + error);
        return;
    }

    getPhone(user.id, function resolvePhone(error, phone) {
        if (error) {
            console.error('There was an error in the phone>>> ' + error);
            return;
        }

        getAddress(user.id, function resolvePhone(error, address) {
            if (error) {
                console.error('There was an error in the adrress>>> ' + error);
                return;
            }

            console.log(`
            User: ${user.name},
            Born Date: ${user.bornDate},
            Phone: (${phone.ddd})${phone.phone},
            Address: ${address.address}, ${address.number},
            `);
        });
    });
});
