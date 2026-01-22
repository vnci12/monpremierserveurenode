//ici je code mon serveur

/**
 * J'importe le package (module) http. Le module HTTP est stocké dans la variable http.L'instruction require permet d'importer le module.
 */
const http = require('http');

// J'importe l'application Express
const app =  require('./app');

// Je configure le numéro du port utiiser dans le serveur  
app.set('port', 3000);

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
server.listen(3000, () => {
    console.log('Le serveur tourne sur le port 3000');
    console.log(now.toLocaleString());
});