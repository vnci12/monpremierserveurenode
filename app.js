// Ici, je vais créer mon application ExpressJs


// J'importe le framework Express
const express = require('express');

// J'initialise mon application Express
const app = express();

app.use((req,res, next) => {
    console.log('Hello, world! Je suis le serveur');
    next();
});

//j'utilise un middleware 2 pour retourner la réponse au client lorsqu'il fait la requête localhost:3000. La réponse est au format JSON
app.use((req, res) => {
    res.json({message: "Et arrete de voller mes manges !"});
    next();
});

//J'utilise un middleware 3 pour tester l'ordre d'exécution des middlewares
app.use((req, res)=> {
    res.console("je suis un middleware dans le serveur");
})

/**
 * J'exporte l'application express sous forme de module
 * Ainsi, l'application app peut être importée dans d'autres fichiers JS.
 */
module.exports = app;