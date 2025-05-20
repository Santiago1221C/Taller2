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

// Ruta para obtener un Pokenea aleatorio con su imagen
router.get("/image", (req, res) => {
 const pokenea = getRandomPokenea();
 res.json({
  id: pokenea.id,
  name: pokenea.name,
  height: pokenea.height,
  ability: pokenea.ability,
  image: pokenea.image,
 });
});

router.get("/dynamic", (req, res) => {
 const data = getRandomPokeneaWithImage();
 res.render("dynamic", {
  data: data,
 });
});

module.exports = { pokeneaRoutes: router };
