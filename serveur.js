//ici je code mon serveur

/**
 * J'importe le package (module) http. Le module HTTP est stocké dans la variable http.L'instruction require permet d'importer le module.
 */
const http = require('http');

// J'importe l'application Express
const app =  require('./app');

//je déclare une variable pour le numéro du port
const numeroPort = 3003;

// Je configure le numéro du port utiiser dans le serveur  
app.set('port', numeroPort);

/**
 * Maintenant je crée mon serveur en utilisant le package http
 */

const server = http.createServer(app);

/**const server = http.createServer((req, res) => {
    res.end("Hello, world! Je suis le serveur");
});*/

//je recupére la date actuelle
const now = new Date();

//Je précise l'addresse et le port du serveur
server.listen(numeroPort, () => {
    console.log("le serveur tourne sur le port " + numeroPort);
    console.log(now.toLocaleString());
});