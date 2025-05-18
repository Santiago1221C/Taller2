const express = require('express');
const os = require('os');
const { pokeneas } = require('./data/pokeneas');
const { getRandomPokenea } = require('./utils/pokeneaUtils');
const { pokeneaRoutes } = require('./routes/pokeneaRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenido a Pokeneas</title>
            <style>
                body {
                    background: #f6f8fc;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                    padding: 32px 24px;
                    text-align: center;
                    max-width: 400px;
                }
                .pikachu {
                    width: 120px;
                    margin-bottom: 16px;
                }
                h1 {
                    color: #ffcb05;
                    margin-bottom: 8px;
                }
                p {
                    color: #555;
                    margin-bottom: 16px;
                }
                .endpoints {
                    background: #f0f0f0;
                    border-radius: 8px;
                    padding: 12px;
                    margin-top: 16px;
                    font-size: 0.95em;
                }
                .endpoints code {
                    background: #e0e7ff;
                    border-radius: 4px;
                    padding: 2px 6px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <img class="pikachu" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" />
                <h1>¡Bienvenido a Pokeneas!</h1>
                <p>Tu API para obtener Pokeneas aleatorios y frases filosóficas.</p>
                <div class="endpoints">
                    <b>Prueba estos endpoints:</b><br>
                    <code>/pokenea/random</code> <br>
                    <code>/pokenea/image</code>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Routes
app.use('/pokenea', pokeneaRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
}); 