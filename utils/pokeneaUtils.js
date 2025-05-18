const { pokeneas } = require('../data/pokeneas');

const getRandomPokenea = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
};

module.exports = { getRandomPokenea }; 