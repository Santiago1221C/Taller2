const express = require('express');
const router = express.Router();
const { getRandomPokenea } = require('../utils/pokeneaUtils');

// Ruta para obtener un Pokenea aleatorio con su frase filosófica
router.get('/random', (req, res) => {
    const pokenea = getRandomPokenea();
    res.json({
        id: pokenea.id,
        name: pokenea.name,
        height: pokenea.height,
        ability: pokenea.ability,
        philosophicalPhrase: pokenea.philosophicalPhrase
    });
});

// Ruta para obtener un Pokenea aleatorio con su imagen
router.get('/image', (req, res) => {
    const pokenea = getRandomPokenea();
    res.json({
        id: pokenea.id,
        name: pokenea.name,
        height: pokenea.height,
        ability: pokenea.ability,
        image: pokenea.image
    });
});

module.exports = { pokeneaRoutes: router }; 