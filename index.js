const express = require("express");
const os = require("os");
const path = require("path");
const { pokeneas } = require("./data/pokeneas");
const { getRandomPokenea } = require("./utils/pokeneaUtils");
const { pokeneaRoutes } = require("./routes/pokeneaRoutes");

const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // or wherever your views are

// Ruta principal
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Routes
app.use("/pokenea", pokeneaRoutes);

app.listen(port, () => {
 console.log(`Servidor corriendo en http://localhost:${port}`);
});
