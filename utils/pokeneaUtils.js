const { pokeneas } = require("../data/pokeneas");
const os = require("os");

const getRandomPokenea = () => {
 const randomIndex = Math.floor(Math.random() * pokeneas.length);
 return pokeneas[randomIndex];
};
const getRandomPokeneaWithImage = () => {
 randomPokenea = getRandomPokenea();
 return {
  imageRoute: randomPokenea.image,
  phrase: randomPokenea.philosophicalPhrase,
  containerId: os.hostname(),
 };
};

module.exports = { getRandomPokenea, getRandomPokeneaWithImage };
