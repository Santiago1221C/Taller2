const express = require("express");
const os = require("os");
const router = express.Router();
const {
 getRandomPokenea,
 getRandomPokeneaWithImage,
} = require("../utils/pokeneaUtils");

// Ruta para obtener un Pokenea aleatorio con su frase filosófica
router.get("/random", (req, res) => {
 const pokenea = getRandomPokenea();
 res.json({
  id: pokenea.id,
  name: pokenea.name,
  height: pokenea.height,
  ability: pokenea.ability,
  philosophicalPhrase: pokenea.philosophicalPhrase,
 });
});

router.get("/image", (req, res) => {
 const data = getRandomPokeneaWithImage();
 res.render("randomImagePhrase", {
  data: data,
 });
});

module.exports = { pokeneaRoutes: router };
