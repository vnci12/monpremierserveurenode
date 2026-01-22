//ici je code mon serveur

/**
 * J'importe le package (module) http. Le module HTTP est stocké dans la variable http.L'instruction require permet d'importer le module.
 */
const http = require('http');

/**
 * Maintenant je crée mon serveur en utilisant le package http
 */

const server = http.createServer((req, res) => {
    res.end("Hello, world! Je suis le serveur");
});

//Je précise l'addresse et le port du serveur
server.listen(3000);