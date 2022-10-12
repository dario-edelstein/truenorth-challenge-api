const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

async function getTasks(quantity = 3) {
    try {
        const response = await fetch(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);
        const data = await response.json();
        return data.map((elem) => {
            return {
                uuid: uuidv4(),
                title: elem
            }
        });
    }
    catch (error) {
        console.error(error)
        return error;
    }
}

module.exports = { getTasks }