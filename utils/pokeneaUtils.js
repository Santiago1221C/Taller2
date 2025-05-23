const { name } = require("ejs");
const { pokeneas } = require("../data/pokeneas");
const os = require("os");

const getRandomPokenea = () => {
 const randomIndex = Math.floor(Math.random() * pokeneas.length);
 return { ...pokeneas[randomIndex], containerId: os.hostname() };
};
const getRandomPokeneaWithImage = () => {
 randomPokenea = getRandomPokenea();
 return {
  name: randomPokenea.name,
  imageRoute: randomPokenea.image,
  phrase: randomPokenea.philosophicalPhrase,
  containerId: randomPokenea.containerId,
 };
};

module.exports = { getRandomPokenea, getRandomPokeneaWithImage };
