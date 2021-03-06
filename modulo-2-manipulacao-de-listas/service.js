const axios = require('axios');
const URL = 'https://swapi.dev/api'; // /people/

async function getPeoples(name) {
    const url = `${URL}/people/?search=${name}&format=json`;
    const { data } = await axios.get(url);
    return data;
}

module.exports = {
    getPeoples,
};
