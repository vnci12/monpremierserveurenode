// Ici, je vais créer mon application ExpressJs


// J'importe le framework Express
const express = require('express');

// J'initialise mon application Express
const app = express();

app.use((req,res) => {
    res.end('Hello, world! Je suis le serveur');
});
/**
 * J'exporte l'application express sous forme de module
 * Ainsi, l'application app peut être importée dans d'autres fichiers JS.
 */
module.exports = app;