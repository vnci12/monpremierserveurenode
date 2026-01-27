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

app.use((req, res, next) => {
    console.log("Et arrete de voller mes manges !");
    next();
});

//J'utilise un middleware 3 pour tester l'ordre d'exécution des middlewares

app.use((req, res, next) => {
    console.log("je suis un middleware dans le serveur");
    next();
});

//j'ajoute un middleware qui gère la sécuriter d'accès

app.use((req, res, next) => {
    //j'ajoute les headers pour permettre l'accès à mon API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    //j'autorise certaines en-têtes dans les requêtes recuses. les en-têtes autorisées sont : Origin, X-Requested-With, Content, Accept, Content-Type, Authorization
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    //j'autorise certaines méthodes: GET, POST, PUT, DELETE, PATCH, OPTIONS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//je dessines mes routes avc Express en utilisant le /api/fruit

app.use('/api/fruit', (req, res) => {
    console.log("je rentre chez moi wagnawé /api/fruit");
    //mon fruit
    const fruit = [
        {
            id: 1,
            nom: "pomme",
            description: "la pomme est un fruit rouge ou vert riche en vitamine C",
            prix: 3
        },

        {
            id: 2,
            nom: "banane",
            description: "la banane est un fruit jaune riche en potassium",
            prix: 2
        }
    ];
    // en terme de reponse je renvoie le tableau de fruit que j'ai créé

    res.status(200).json(fruit);
});

/**
 * J'exporte l'application express sous forme de module
 * Ainsi, l'application app peut être importée dans d'autres fichiers JS.
 */
module.exports = app;